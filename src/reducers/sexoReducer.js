
export const sexoReducer = (state,action) => {
   
    switch (action.type) {
        case 'add':
            
            return [...state,action.payload]
    
        case 'delete':

        return state.filter(sexo => sexo.id !== action.payload)

        default:
            return state;
    }
}
