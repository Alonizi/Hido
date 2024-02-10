import { FastifyReply, FastifyRequest } from "fastify";

export async function authUserHandler(request:FastifyRequest,reply:FastifyReply){


    return {
        accessToken: request.jwt.sign(
            {
                name:"test",
                id:1
            })
        }

    // return reply.send(
    //     request.jwt.sign(
    //         {
    //             name:"test",
    //             id:1
    //         }))
}