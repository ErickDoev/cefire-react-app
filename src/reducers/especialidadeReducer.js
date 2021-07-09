// {
//     id,
//     especialidad

import { types } from "../types/types";

// }
const initState = {
    especialidades:JSON.parse(localStorage.getItem('especialidades')) || [],
    especialidaActive:null
};

export const especialidadeReducer = (state = initState,action) => {

    switch (action.type) {
        case types.especialidadAdd:
            return {
                ...state,
                especialidades:[...state.especialidades,action.payload]
            }
    
        case types.especialidadDelete:
            return{
                ...state,
                especialidades:state.especialidades.filter( e => (e.id !== action.payload))
            }

        case types.especialidadActive:
            return{
                ...state,
                especialidaActive:state.especialidades.find(e => e.id === action.payload)
            }

        case types.especialidadClearActive:
            return{
                ...state,
                especialidaActive:null
            }

        case types.especialidadUpdated:
            return{
                ...state,
                especialidades: state.especialidades.map(e =>  (e.id === action.payload.id)? {...e,especialidad:action.payload.especialidad} : (e) )
            }

        default:
            return state;
    }
}
