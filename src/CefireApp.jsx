import React/*, { useReducer} */from 'react';
import { Provider } from "react-redux";
//import { LoginScreen } from './components/auth/LoginScreen';
//import { RegisterScreen } from './components/auth/RegisterScreen';
// import { UserContext } from './context/UserContext';
// import { authReducer } from './reducers/authReducer';
import { AppRouter } from './routes/AppRouter';
import { store } from "./store/store";

export const CefireApp = () => {

    // const [user, dispatch] = useReducer(authReducer, {
    //     logged:false
    // });

    return (
        
        // <UserContext.Provider value={{user,dispatch}}>
        //     <AppRouter /> 
        // </UserContext.Provider>

        <Provider store={store}>
            <AppRouter /> 
        </Provider>
    )
}
