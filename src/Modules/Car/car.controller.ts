import { FastifyReply, FastifyRequest } from "fastify";
import { createCar, deleteCar, getCarbyId, getCarsList, updateCar } from "./car.service";
import { createCarInput, findCarbyIdInput, getCarsListInput, updateCarInput } from "./car.schema";

export async function createCarHandler(request:FastifyRequest<{Body:createCarInput}>){

    const car = createCar(request.body)

    return car 

}

export async function getCarHandler(request:FastifyRequest<{Querystring:findCarbyIdInput}>){

    const car = getCarbyId(request.query)
    return car 
}

export async function getCarsHandler (request:FastifyRequest<{Querystring:getCarsListInput}>){

    const carsList = getCarsList(request.query)

    return carsList 

}

export async function deleteCarHandler(request:FastifyRequest<{Querystring:findCarbyIdInput}>,reply:FastifyReply){

    const deletedCar = deleteCar(request.query)
    return deletedCar
}

export async function updateCarHandler(request:FastifyRequest<{Body:updateCarInput}>){


    const updatedCar = updateCar(request.body)
    return updatedCar
}