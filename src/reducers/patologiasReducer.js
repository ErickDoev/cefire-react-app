

export const patologiasReducer = (state,action) => {
    switch (action.type) {
        case 'add':
            
            return[...state,action.payload];

        case 'delete':

            return state.filter(patologia => patologia.id !== action.payload);
    
        default:
            return state;
    }
}
