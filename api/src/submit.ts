import * as Drash from "drash/mod.ts";
import {
    crypto,
    toHashString,
} from "$std/crypto/mod.ts";
import { deta } from "@lib/deta.ts";
import { IError, IResponse } from "@lib/IResponse.ts";
import { IField, ISubmission } from "@lib/ISubmission.ts";

const db = deta.Base("submissions");

export class SubmitResource extends Drash.Resource {
    public paths = [
        "/api/submit/:formId",
        "/submit/:formId"
    ];

    public async POST(
        request: Drash.Request,
		response: Drash.Response,
	): Promise<void> {
        const collectPrefix = "collect_";

        // Get form id
        const formId = request.pathParam("formId");
        if (!formId) {
            return response.json({ ok: false, error: "No form id provided!" } as IError, 404);
        }
        
        

        // "Calculate" sender IP hash
        const origin = request.headers.has("x-forwarded-for") ? request.headers.get("x-forwarded-for") : request.headers.get("origin");        
        const sender = toHashString(await crypto.subtle.digest(
            "SHA-384",
            new TextEncoder().encode(origin || "null")
        ));

        // -> We don't know what the user will send
        // deno-lint-ignore no-explicit-any 
        const bodyParams = request.bodyAll<any>();
        // -> We don't know what the user will send
        // deno-lint-ignore no-explicit-any 
        const collectedFieldNames = Object.keys(request.bodyAll<any>()).filter(e => e.startsWith("collect_"));
        const collectedFields = new Map<string, unknown>();
        collectedFieldNames.forEach(name => {
            collectedFields.set(name.slice(collectPrefix.length), bodyParams[name]);
        })

        // TODO(@max): Add typing dev transform for now
        const fields: { [key: string]: IField } = {};
        collectedFields.forEach((value, key) => { fields[key] = { type: "text", value } });

        // Create & insert new submission
        const submission: ISubmission = {
            id: crypto.randomUUID(),
            createdAt: Date.now(),

            sender,
            formId,
            read: false,
            closed: false,

            fields: fields,
        }
        
        try {
            // @ts-ignore -> Deta SDK shitting itself but we good :)
            await db.put(submission, submission.id);
        }
        catch (err) {
            if (request.accepts("application/json"))
                return response.json({ ok: false, error: err } as IError, 500);
            else
                return response.text(`Oops, something went wrong :/ ${err}`, 500);
        }

        return response.json({ ok: true } as IResponse);        
    }

}