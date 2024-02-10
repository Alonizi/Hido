import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import { createCarSchema, findCarbyIdSchema, getCarsListSchema, updateCarSchema } from './Modules/Car/car.schema'
import { carRoutes } from './Modules/Car/car.route'
import swagger, { fastifySwagger } from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import fjwt, { JWT } from '@fastify/jwt'
import { authRoutes } from './Modules/Auth/auth.route'



declare module "fastify" {
    interface FastifyRequest {
      jwt: JWT;
    }
    export interface FastifyInstance {
      auth: any;
    }
  }

function buildServer() {
    const server = fastify()

    server.register(fjwt,{
        secret:"mysecret"
    })

    server.decorate(
        "auth",
        async (request:FastifyRequest,reply:FastifyReply)=>
        {
        try{
            await request.jwtVerify()
        }
        catch(e){
            return reply.send(e)
        }
        }
    )

    server.addSchema(createCarSchema)
    server.addSchema(getCarsListSchema)
    server.addSchema(findCarbyIdSchema)
    server.addSchema(updateCarSchema)


    const swaggerOptions = {
        swagger: {
            info: {
                title: "My Title",
                description: "My Description.",
                version: "1.0.0",
            },
            host: "localhost",
            schemes: ["http", "https"],
            consumes: ["application/json"],
            produces: ["application/json"],
            tags: [{ name: "Default", description: "Default" }],
        },
    };
    
    const swaggerUiOptions = {
        routePrefix: "/docs",
        exposeRoute: true,
    };
    
    server.register(fastifySwagger, swaggerOptions);
    server.register(fastifySwaggerUi, swaggerUiOptions);
    
    server.register(carRoutes,{prefix:"api/cars"})
    server.register(authRoutes,{prefix:"api/auth"})

    return server

}

export default buildServer