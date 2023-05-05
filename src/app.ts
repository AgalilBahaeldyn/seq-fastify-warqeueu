import fastify, { FastifyServerOptions } from "fastify";
import {articleRouter,serviceuserRouter,AdminleRouter} from "./routes";

const App = (options: FastifyServerOptions) => {
	const app = fastify(options)
	
	app.get("/", async () => "SERVER");
	app.register(articleRouter, { prefix: "/api/v1/articles" });
	app.register(serviceuserRouter, { prefix: "/api/v1/serviceuser" });
	app.register(AdminleRouter, { prefix: "/api/v1/admin" });
	
	return app
}
export default App