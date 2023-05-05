import { ServiceuserCreateRequest,RequestWithIdServiceuser } from "types/serviceuser/serviceuser.controller.types";
import { AdminAttributes } from "types/admin/admin.model.types";
import ServiceuserService from "../services/serviceuser.service"

export const GetServiceuserAll = async () => {
	return ServiceuserService.getServiceuser()
}

export const GetServiceuserById = async (req: RequestWithIdServiceuser) => {
	const id = req.params.id;
	return ServiceuserService.getOneServiceuser(id)
}

export const CreateServiceuser = async (req: ServiceuserCreateRequest) => {
	const { service_cid } = req.body
	const service_date: Date = new Date();
	return ServiceuserService.createServiceuser({ service_cid, service_date })
}

export const ServiceuserCheckTravel = async (req: ServiceuserCreateRequest) => {
	
	type ServiceRequest = {
		service_cid: number
	  };
	const { service_cid } = req.body//จากbody
	const  queryresult=await ServiceuserService.getOneServiceuserLastRow( service_cid )


	let datenow:Date=new Date
	datenow=new Date(datenow.getFullYear(), datenow.getMonth(), datenow.getDate());

	let service_datetext: String = JSON.stringify(queryresult.service_date);

	let service_date: Date = new Date(service_datetext);
	service_date = new Date(service_date.getFullYear(), service_date.getMonth(), service_date.getDate());

	const diffTime = Math.abs(service_date.getTime() - datenow.getTime());
	const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	console.log(`There are ${diffDays} days between ${datenow} and ${service_date}`);

	return service_datetext
	// if (diffDays <= 5) {
	// 	console.log("อยู่ในช่วง 5 วัน",diffDays);
	// 	return `yes${diffDays}`
	//   } else {
	// 	console.log("ไม่อยู่ในช่วง 5 วัน",diffDays);
	// 	return `no${diffDays}`
	//   }
	// return datenow
	
	
	
}

// export const handleUpdateArticle = async (req: UpdateArticleRequest) => {
// 	const { title, text, type } = req.body
// 	return ServiceuserService.updateArticle(req.params.id, { title, text, type })
// }

// export const handleDeleteArticle = async (req: RequestWithIdArticle) => {
// 	return ServiceuserService.deleteArticle(req.params.id)
// }

export default {
	GetServiceuserAll,
	GetServiceuserById,
	CreateServiceuser,
	ServiceuserCheckTravel,
}