import { AdminAttributes } from "types/admin/admin.model.types";
import db from "../models";
const AdminModel = db.Admin


export const getAdmin = async (): Promise<AdminAttributes[]> => {
	const response = await AdminModel.findAll();
	return response
}

export const getOneAdmin= async (id: string): Promise<AdminAttributes> => {
	const response: AdminAttributes = await AdminModel.findByPk(id)
	return response
}

export const createAdmin = async (body: AdminAttributes): Promise<AdminAttributes> => {
	const response: AdminAttributes = await AdminModel.create(body)
	return response
}

export const updateAdmin = async (id: string, body: AdminAttributes) => {
	const response = await AdminModel.update({ ...body }, { where: { id } })
	// where: { name: customerName }
	return response
}

export const deleteAdmin = async (id: string) => {
	const response = await AdminModel.destroy({ where: { id } });
	return response
}

export default {
	getAdmin,
	getOneAdmin,
	createAdmin,
	updateAdmin,
	deleteAdmin,
}