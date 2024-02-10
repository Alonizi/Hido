import { faker } from "@faker-js/faker";
import { test } from "tap";
import { ImportMock } from "ts-mock-imports";
import * as carService from "../car.service";
import buildServer from "../../../server";


test("GET '/api/cars/list' _ get cars list success",async (t)=>{


    const responseArr :
    {  
        id : Number, 
        modelYear :String ,
        manufacture :String ,
        modelName :String ,
        manufacturingDate :String,
        vinNumber :String ,
        price :Number 
    }[] = []

    const page = 1
    const pageSize = 10
    const fastify = buildServer()
    const stub = ImportMock.mockFunction(carService,"getCarsList",{
    })

    t.teardown(()=>{
        fastify.close();
    })

    const queryParams = `pageSize=${pageSize}&page=${page}`

     const response = await fastify.inject({
        method:"GET",
        url:"api/cars/list",
        query:queryParams
     })

    const statusCode = response.statusCode
    const json = response.json()

    
    
    t.same(statusCode,200)
    t.same(json,responseArr)


})

test("GET '/api/cars/list' _ get cars list failed",async (t)=>{

    const page = 1
    const pageSize = 10
    const fastify = buildServer()

    t.teardown(()=>{
        fastify.close();
    })

    const queryParams = `page=${page}`

     const response = await fastify.inject({
        method:"GET",
        url:"api/cars/list",
        query:queryParams
     })

    const statusCode = response.statusCode
    const json = response.json()
    
    t.same(statusCode,400)
    t.same(json.message,"querystring must have required property 'pageSize'")


})

