import React from 'react';
import { Redirect,Route, } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoutes = ({isAuthenticated,component:Component,...rest}) => {

     //<Route path'/' component={}/>
    return (
        //path='/', exact, etc
        <Route {...rest}

        //history,location, search
            component={ (props) =>(
                
                (isAuthenticated) 
                //refresa el componente al que el user quiere entrar
                //le enviamos las props que son history, location, search etc
                    ? (<Component {...props} />) 
                //si no esta autenticado, entonces lo regresa al login
                    : (<Redirect to='/auth/login'/>)
            )}
        />
        
    )
}

PrivateRoutes.propTypes={
    isAuthenticated:PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}