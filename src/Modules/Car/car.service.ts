import prisma from "../../utils/Prisma";
import { createCarInput, findCarbyIdInput, getCarsListInput, updateCarInput } from "./car.schema";

export async function createCar(data:createCarInput) { 
   return prisma.car.create({
        data
    })
}

export async function deleteCar(data:findCarbyIdInput) {

   return prisma.car.delete({
        where:{
            id:data.id
        }
    })
}

export async function getCarbyId(data:findCarbyIdInput) {

   return prisma.car.findUnique({where:{id:data.id}})
}

export async function getCarsList(data:getCarsListInput){

    return prisma.car.findMany({
        skip: data.page - 1,
        take: data.pageSize,
      });
}

export async function updateCar(data:updateCarInput){

    return prisma.car.update({
        where:{
            id:data.id
        },
        data:{
            ...data
        }
    })
}