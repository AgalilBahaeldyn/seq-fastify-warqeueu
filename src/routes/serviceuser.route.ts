import { FastifyInstance } from "fastify"; // import FastifyInstance
import serviceuserController from './../controllers/serviceuser.controller';


const serviceuserRouter = async (app: FastifyInstance) => {
	// route api app.method("path", {option}, handler)
	// create .get route endpoint for article route that '/'
	// mockup data
	

	app.get(
		"/",
		serviceuserController.GetServiceuserAll
	);

	app.get(
		"/get/:id",
		serviceuserController.GetServiceuserById
	);

	app.post(
		"/create",
		serviceuserController.CreateServiceuser
	);

	app.post(
		"/checkvisit",
		serviceuserController.ServiceuserCheckTravel
	);

	


};

export default serviceuserRouter;