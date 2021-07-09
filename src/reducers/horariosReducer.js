

export const horariosReducer = (state,action) => {

    switch (action.type) {
        case 'add':
            
            return [...state,action.payload]
        
        case 'delete':
            return state.filter(horario => horario.id !== action.payload)

        default:
            return state;
    }
}