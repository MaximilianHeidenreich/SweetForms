import { config } from "$std/dotenv/mod.ts";
import * as Drash from "drash/mod.ts";
import { DexterService } from "drash/src/services/dexter/dexter.ts";
import { CORSService } from "drash/src/services/cors/cors.ts";

// Resources
//import { ProjectsResource } from "./src/projects.ts";
import { SubmissionsResource } from "@src/submissions.ts";
import { SubmitResource } from "@src/submit.ts";

const ENV = await config({ path: "./.env.local", export: true });
const PORT = Number(Deno.env.get("PORT")) || 3050;

class HomeResource extends Drash.Resource {
	public paths = ["/"];

	public GET(request: Drash.Request, response: Drash.Response): void {
		return response.json({
			hello: "world",
			time: new Date(),
		});
	}
}

const dexter = new DexterService({
	url: true,
	method: true,
	response_time: true,
});
const cors = new CORSService({
    preflight: false,
	origin: ["*", "http://localhost:3000", "http://localhost:3000"],
});


const server = new Drash.Server({
	hostname: "localhost",
	port: PORT,
	protocol: "http",
	services: [
		cors,
		dexter,
	],
	resources: [
		HomeResource,
        SubmitResource,
		SubmissionsResource
	],
});

server.run();
console.log(`Server running at ${server.address}.`);
