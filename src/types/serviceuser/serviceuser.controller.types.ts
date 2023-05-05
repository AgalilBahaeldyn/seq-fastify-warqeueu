import { FastifyRequest } from "fastify";
export type RequestWithIdServiceuser = FastifyRequest<{
	Params: { id: string };
}>;


// export type UpdateServiceuserRequest = FastifyRequest<{
// 	Params: { id: string };
// 	Body: {
// 		title?: string | undefined;
// 		text?: string | undefined;
// 		type?: string | undefined;
// 	};
// }>;

export type ServiceuserCreateRequest = FastifyRequest<{
	Body: {
		service_cid?: number | undefined;
		service_date?: Date | undefined;
	};
}>;