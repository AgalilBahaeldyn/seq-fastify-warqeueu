import { FastifyRequest } from "fastify";
export type RequestWithIdAdmin = FastifyRequest<{
	Params: { id: string };
}>;


// export type UpdateArticleRequest = FastifyRequest<{
// 	Params: { id: string };
// 	Body: {
// 		admin_cid?: number | undefined;
// 		text?: string | undefined;
// 		type?: string | undefined;
// 	};
// }>;

export type AdminCreateRequest = FastifyRequest<{
	Body: {
		admin_cid?: number | undefined;
		admin_name?: string | undefined;
	};
}>;