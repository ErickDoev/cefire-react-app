import React, { useEffect, useState }/*, { useContext } */from 'react'
import {
    BrowserRouter as Router,
    Switch, 
    Redirect
  } from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import {firebase} from '../firebase/firebaseConfig';
//import { UserContext } from '../context/UserContext';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';


export const AppRouter = () => {

    //const {user} = useContext(UserContext);

    const dispatch = useDispatch();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [checking, setChecking] = useState(true);

    //se ejecuta de manera asincrona
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user?.uid){
                dispatch(login(user.uid,user.displayName));
                setIsAuthenticated(true);
            }else{
                setIsAuthenticated(false);
            }

            setChecking(false);
        })
       
   }, [dispatch,setChecking,setIsAuthenticated]);

   if(checking){
       return(
           <h1>Autenticando...</h1>
       )
   }

    return (
                
        <Router >
            <div className={isAuthenticated? 'cefire__main-content': 'auth__main'}/*className={user.logged? 'cefire__main-content':'auth__main' }*/>
                <Switch>
                    <PublicRoutes
                        path='/auth'
                        component={AuthRouter}
                        isAuthenticated={isAuthenticated}
                    />

                    <PrivateRoutes
                        path='/'
                        component={DashboardRoutes}
                        isAuthenticated={isAuthenticated}
                    />
                    <Redirect to='/auth/login'/>
                </Switch>
            </div>
        </Router>
    )
}
