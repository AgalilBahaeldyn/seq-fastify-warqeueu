import { AdminCreateRequest, RequestWithIdAdmin } from "types/admin/admin.controller.types";
import adminService from "../services/admin.service"

export const handleGetArticle = async () => {
	return adminService.getAdmin()
}

export const handleGetArticleById = async (req: RequestWithIdAdmin) => {
	const id = req.params.id;
	return adminService.getOneAdmin(id)
}

export const handleCreateArticle = async (req: AdminCreateRequest) => {
	const { admin_cid, admin_name } = req.body
	return adminService.createAdmin({  admin_cid,admin_name })
}

// export const handleUpdateArticle = async (req: UpdateArticleRequest) => {
// 	const { title, text, type } = req.body
// 	return articleService.updateArticle(req.params.id, { title, text, type })
// }

// export const handleDeleteArticle = async (req: RequestWithIdArticle) => {
// 	return articleService.deleteArticle(req.params.id)
// }

export default {
	handleGetArticle,
	handleGetArticleById,
	handleCreateArticle,
}