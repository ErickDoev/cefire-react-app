import { types } from "../types/types"

export const authReducer = (state = {},action) => {
    
    switch (action.type) {
        case types.login:
            
            return {
                uid:action.payload.uid,
                name:action.payload.displayName
                // id:action.payload.id,
                // email:action.payload.email,
                // logged:true
                //password:action.payload.password
            }
    
        case types.logout:

            // return { logged:false}
            return {}

        // case types.register:
        //     return {
        //         name:action.payload.name,
        //         email:action.payload.email,
        //         password:action.payload.password,
        //         password2:action.payload.password2
        //     }

        default:
            return state;
            
    }
}
