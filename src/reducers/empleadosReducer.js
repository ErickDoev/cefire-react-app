import { types } from "../types/types";

const initialState = {
    empleados: JSON.parse(localStorage.getItem('empleados')) || [],
    active:null,
    edit:null
}
// {
//     empleados:[{},{},{},{}],
//     active:null
// }
export const empleadosReducer = (state = initialState,action) => {
    switch (action.type) {
        case types.empleadoAdd:
            
            return {
                    ...state,
                    empleados:[...state.empleados,action.payload]
                };

        case types.empleadDelete:

        return {
            ...state,
            empleados:state.empleados.filter(empleado => empleado.id !== action.payload),
            active:null
        }

        case types.empleadoActive:
            return {
                ...state,
                active:{
                    ...action.payload
                }
            }

        case types.empleadoDeactive:

            return{
                ...state,
                active:null
            }

        case types.empleadoActiveEdit:
            return{
                ...state,
                edit:{
                    ...action.payload
                }
            }

        case types.empleadoEdit:
            return {
                ...state,
                empleados: state.empleados.map(
                    emp => emp.id === action.payload.id ? action.payload.employee : emp)
            }

        case types.empleadoCancelSubmit:
            return{
                ...state,
                edit:null
            }
    
        default:
            return state;
    }
}
