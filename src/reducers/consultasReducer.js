import { types } from "../types/types";

const initialState = {
    consultas:[],
    contultaActive:null
}

export const consultasReducer = (state = initialState,action) => {
    switch (action.type) {
        case types.consultaAdd:
            return{
                ...state,
                consultas:[...state.consultas,action.payload]
            }

        case types.consultaActive:
            return{
                ...state,
                contultaActive:action.payload
            }

        case types.consultaClearActive:
            return{
                ...state,
                contultaActive:null
            }

        case types.consultaDelete:
            return{
                ...state,
                consultas:state.consultas.filter(c => c.id !== action.payload)
            }

        case types.consultaUpdate:
            return{
                ...state,
                consultas:state.consultas.map(c => (c.id===action.payload.id)? action.payload : c )
            }
    
        default:
            return state;
    }
}
