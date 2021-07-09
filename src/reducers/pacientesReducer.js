import { types } from "../types/types";

const initialState = {
    pacientes: JSON.parse(localStorage.getItem('pacientes')) || [],
    active:null,
    activeUpdate:null
}

export const pacientesReducer = (state = initialState,action) => {

    switch (action.type) {
        case types.pacientesAdd: 
            return {
                ...state,
                pacientes:[...state.pacientes,action.payload]
            }

        case types.pacientesDelete:
            return {
                ...state,
                pacientes:state.pacientes.filter(p => p.id !== action.payload)
            }

        case types.pacientesActive:
            return{
                ...state,
                active:state.pacientes.find(p => p.id === action.payload)
            }

        case types.pacientesClearActive:
            return {
                ...state,
                active:null
            }

        case types.pacientesSetActiveUpdated:
            
            return{
                ...state,
                activeUpdate:state.pacientes.find(p => p.id === action.payload)
            }
    
        case types.pacientesClearActiveUpdated:
            return{
                ...state,
                activeUpdate:null
            }
        
        case types.pacientesUpdated:
            return{
                ...state,
                pacientes:state.pacientes.map(p => (p.id === action.payload.id)? action.payload : p )
            }
    
        default:
            return state;
    }
}