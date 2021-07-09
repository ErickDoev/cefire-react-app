
import { types } from "../types/types";


export const employeAdd = ( employee ) => ({
    type: types.empleadoAdd,
    payload:{
        id:new Date().getTime(),
        ...employee
    }
   
});


export const employeDelete = (id) => ({
    type:types.empleadDelete,
    payload:id
});

export const employeActive = (id,nombre,app,apm,especialidad) => ({
    type:types.empleadoActive,
    payload:{
        id,
        nombre,
        app,
        apm,
        especialidad}
});

export const employeDeactive = () => ({
    type:types.empleadoDeactive
});


export const employeeActiveEdit = (id,employee) => ({
    type:types.empleadoActiveEdit,
    //{}
    payload:
        {
            id,
            ...employee
        }
});


export const employeeEdit = ( id, employee ) => {
    return {
        type:types.empleadoEdit,
        payload:{
            id,
            employee:{
                id,
                ...employee
            }
        }
    }
    
}

export const employeeCancel = () => ({

    type:types.empleadoCancelSubmit

});