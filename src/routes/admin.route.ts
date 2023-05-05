import { FastifyInstance } from "fastify"; // import FastifyInstance
import adminController from './../controllers/admin.controller';


const AdminleRouter = async (app: FastifyInstance) => {
	// route api app.method("path", {option}, handler)
	// create .get route endpoint for article route that '/'
	// mockup data
	

	app.get(
		"/",
		adminController.handleGetArticle
	);

	app.get(
		"/get/:id",
		adminController.handleGetArticleById
	);

	app.post(
		"/create",
		adminController.handleCreateArticle
	);

	// app.put(
	// 	"/update/:id",
	// 	articleController.handleUpdateArticle
	// );
	
	// app.delete(
	// 	"/delete/:id",
	// 	articleController.handleDeleteArticle
	// );

};

export default AdminleRouter;