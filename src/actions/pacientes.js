import { types } from "../types/types"



export const pacientesAdd = (paciente) => ({
    type:types.pacientesAdd,
    payload:{
        id:new Date().getTime(),
        ...paciente
    }
});

export const pacienteDelete = (id) => ({
    type:types.pacientesDelete,
    payload:id
});

export const pacienteActive = (id) => ({
    type:types.pacientesActive,
    payload:id
});

export const pacienteClearActive = () => ({
    type:types.pacientesClearActive
});

export const pacienteSetUpdateActive = (id) => ({
    type:types.pacientesSetActiveUpdated,
    payload:id
});

export const pacientesClearActiveUpdated = () => ({
    type:types.pacientesClearActiveUpdated
});

export const pacientesUpdate = (pacienteActualizado) => ({
    type:types.pacientesUpdated,
    payload:pacienteActualizado
});