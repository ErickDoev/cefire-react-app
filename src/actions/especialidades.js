import { types } from "../types/types";


export const especialidadesAdd = (especialdiad) => ({

    type:types.especialidadAdd,
    payload:{
        id:new Date().getTime(),
        ...especialdiad
    }

})

export const especialidadDelete = (id) => ({
    type:types.especialidadDelete,
    payload:id
});

export const especialidadActive = (id) => ({
    type:types.especialidadActive,
    payload:id
});

export const especialidadClearActive = () => ({
    type:types.especialidadClearActive
});

export const especialdiadUpdate = (especialidad) => ({
    type:types.especialidadUpdated,
    payload:especialidad
});
