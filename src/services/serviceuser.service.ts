import { ServiceAttributes } from "types/serviceuser/serviceuser.model.types";
import db from "../models";
const ServiceuserModel = db.Serviceuser


export const getServiceuser = async (): Promise<ServiceAttributes[]> => {
	const response = await ServiceuserModel.findAll();
	return response
}

export const getOneServiceuser = async (id: string): Promise<ServiceAttributes> => {
	const response: ServiceAttributes = await ServiceuserModel.findByPk(id)
	return response
}
export const getOneServiceuserLastRow = async (service_cid: number| undefined,) => {

	const response = await ServiceuserModel.findOne({
  where: {
    service_cid: service_cid,
  },
  order: [['service_date', 'DESC']],
});
	return response
}

export const createServiceuser = async (body: ServiceAttributes): Promise<ServiceAttributes> => {
	const response: ServiceAttributes = await ServiceuserModel.create(body)


	interface ApiResponse<T> {
		status: number;
		message: string;
	  } 
	  function createApiResponse<T>(status: number, message: string): ApiResponse<T> {
		return { status, message };
	  }
	  
	  const msg = createApiResponse(200, "Success");

	return msg;
}

export const updateServiceuser = async (id: string, body: ServiceAttributes) => {
	const response = await ServiceuserModel.update({ ...body }, { where: { id } })
	return response
}

export const deleteServiceuser = async (id: string) => {
	const response = await ServiceuserModel.destroy({ where: { id } });
	return response
}

export default {
	getServiceuser,
	getOneServiceuser,
	getOneServiceuserLastRow,
	createServiceuser,
	updateServiceuser,
	deleteServiceuser
}