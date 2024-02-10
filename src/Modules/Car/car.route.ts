import fastify, { FastifyInstance } from "fastify";
import { createCarHandler, deleteCarHandler, getCarHandler, getCarsHandler, updateCarHandler } from "./car.controller";
import { createCarSchema, findCarbyIdSchema, getCarsListSchema, updateCarSchema } from "./car.schema";
import { Integer } from "@sinclair/typebox";


export async function carRoutes(server:FastifyInstance){

    server.post("/",{
        preHandler:[server.auth],
        schema: {
            body:createCarSchema,
        }
    },
     createCarHandler
    )

    server.delete("/",{
        schema:{
            querystring:findCarbyIdSchema,
        }
    },
    deleteCarHandler
    )

    server.get("/",{
        schema:{
            querystring:findCarbyIdSchema,
        }
    },
    getCarHandler
    )

    server.put("/",{
        schema:{
            body:updateCarSchema,
        }
    },
    updateCarHandler
    )

    server.get("/list",{
        schema:{
            querystring:getCarsListSchema
        }

    },getCarsHandler)

    
}