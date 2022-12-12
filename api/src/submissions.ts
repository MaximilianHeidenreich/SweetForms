import * as Drash from "drash/mod.ts";
import { deta } from "@lib/deta.ts";
import { IError, IResponse } from "@lib/IResponse.ts";
import { IField, ISubmission } from "@lib/ISubmission.ts";

const db = deta.Base("submissions");

export class SubmissionsResource extends Drash.Resource {
    public paths = [
        "/api/submissions", 
        "/api/submissions/:id", 
        "/submissions", 
        "/submissions/:id"
    ];

    public async GET(
        request: Drash.Request,
        response: Drash.Response,
    ): Promise<void> {
        // Get one
        const id = request.pathParam("id");
        if (id) {
            const submission = await db.get(id);
            return response.json({ ok: true, data: submission } as IResponse);
        }

        const queryRaw = request.queryParam("query");
        let query: Record<string, unknown> | Record<string | number | symbol, never> = {};
        if (queryRaw) {
            try {
                query = JSON.parse(atob(queryRaw));
            }
            catch (err) {
                return response.json({ ok: false, error: "Invalid query!" } as IError, 400);
            }
        }
        
        const queryOptions: { [key: string]: unknown } = {};
        const limit = request.queryParam("limit") || 50;
        if (limit) queryOptions["limit"] = Number(limit);
        const last = request.queryParam("last") || undefined;
        if (last) queryOptions["last"] = last;

        //@ts-ignore - Deta SDK is shitting itself but we good :)
        const submissions = await db.fetch(query, queryOptions);
        return response.json({ ok: true, data: submissions } as IResponse);
    }

    public async PATCH(
        request: Drash.Request,
        response: Drash.Response,
    ): Promise<void> {
        // Get one
        const id = request.pathParam("id") as string;
        if (!(await db.get(id))) {
            return response.json({ ok: false, error: "Submission with id not found!" } as IError, 404);
        }

        const updates = request.bodyParam<unknown>("updates");
        try {
            // @ts-ignore - Deta SDK is shitting itself but we good :)
            await db.update(updates, id);
        }
        catch (err) {
            return response.json({ ok: false, error: "Could not update submission!" } as IError, 500);
        }

        return response.json({ ok: true } as IResponse);
    }

}