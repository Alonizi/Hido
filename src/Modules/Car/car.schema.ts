import { Required, Type, type Static } from '@sinclair/typebox'
import { format } from 'path'


    
export const createCarSchema = Type.Object({
    modelYear: Type.String(),                                 
    manufacture: Type.String(),                                
    modelName: Type.String() ,
    manufacturingDate : Type.String({format:'date-time'}),
    vinNumber : Type.String(),
    price : Type.Number()

},{
    $id:'createCarSchema'
})

export const updateCarSchema = Type.Object({
    id:Type.Number(),
    modelYear: Type.Optional(Type.String()),                                 
    manufacture: Type.Optional(Type.String()),                                
    modelName: Type.Optional(Type.String()),
    manufacturingDate :Type.Optional(Type.String({format:'date-time'})),
    vinNumber : Type.Optional(Type.String()),
    price : Type.Optional(Type.Number())

},{
    $id:'updateCarSchema'
})

export const getCarsListSchema = Type.Object({
    page:Type.Number(),
    pageSize:Type.Number(),

},{
    $id:'getCarsListSchema'
})

export const findCarbyIdSchema = Type.Object({
    id:Type.Number(),

},{
    $id:'findCarbyIdSchema'
})
                                                
export type getCarsListInput = Static <typeof getCarsListSchema>
export type createCarInput = Static<typeof createCarSchema>   
export type findCarbyIdInput = Static <typeof findCarbyIdSchema>
export type updateCarInput = Static <typeof updateCarSchema>


