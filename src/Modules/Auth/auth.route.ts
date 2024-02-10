import { FastifyInstance } from "fastify";
import { authUserHandler } from "./auth.controller";

export async function authRoutes(server:FastifyInstance){

    server.get('/', (req, reply) => {
        // some code
        const token = server.jwt.sign({ name:"test",Id:1 })
        reply.send({ token })
      })
}