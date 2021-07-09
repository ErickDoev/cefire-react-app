import { types } from "../types/types";


export const consultasAdd = (consulta) => ({
   type:types.consultaAdd,
   payload: {
      ...consulta,
      id:new Date().getTime()
   }
});

export const consultaActive = (consulta) => ({
   type:types.consultaActive,
   payload:consulta
});

export const clearActiveConsulta = () => ({
   type:types.consultaClearActive
});

export const consultaDelete = (id) => ({
   type:types.consultaDelete,
   payload:id
});

export const consultaUpdate = (consulta) => ({
   type:types.consultaUpdate,
   payload:consulta
});