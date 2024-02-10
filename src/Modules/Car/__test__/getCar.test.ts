import { faker } from "@faker-js/faker";
import { test } from "tap";
import { ImportMock } from "ts-mock-imports";
import * as carService from "../car.service";
import buildServer from "../../../server";


test("GET '/api/cars' _ get car successfully",async (t)=>{
    const manufacturingDate = faker.date.recent()
    const modelName = faker.vehicle.model()
    const modelYear = "2020"
    const vinNumber = faker.vehicle.vin()
    const manufacture = faker.vehicle.manufacturer()
    const id = 123
    const price = 200000

    const fastify = buildServer()

    const stub = ImportMock.mockFunction(carService,"getCarbyId",{
        id,
        modelYear,
        manufacture,
        modelName,
        manufacturingDate,
        vinNumber,
        price
    })

    t.teardown(()=>{
        fastify.close();
        stub.restore()
    })

     const response = await fastify.inject({
        method:"GET",
        url:"api/cars",
        query:"id="+id
     })

    const json = response.json()
    
    t.same(json.id,id)
    t.same(response.statusCode,200)

})


test("GET '/api/cars' _ get car fail",async (t)=>{
    const manufacturingDate = faker.date.recent()
    const modelName = faker.vehicle.model()
    const modelYear = "2020"
    const vinNumber = faker.vehicle.vin()
    const manufacture = faker.vehicle.manufacturer()
    const id = 123
    const price = 200000

    const fastify = buildServer()

    const stub = ImportMock.mockFunction(carService,"getCarbyId",{
        id,
        modelYear,
        manufacture,
        modelName,
        manufacturingDate,
        vinNumber,
        price
    })

    t.teardown(()=>{
        fastify.close();
        stub.restore()
    })

     const response = await fastify.inject({
        method:"GET",
        url:"api/cars",
        query:""
     })

     const statusCode = response.statusCode
     const json = response.json()
     
    t.same(statusCode,400)
    t.same(json.message,"querystring must have required property 'id'")

})