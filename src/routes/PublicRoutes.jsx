import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PublicRoutes = ({isAuthenticated,component:Component,...rest}) => {
    return (
       <div >
           <Route 
            {...rest}
            component={(props)=>(   
                (!isAuthenticated)
                    ? (<Component {...props}/>)
                    : (<Redirect to='/'/>)
            )}/>
       </div>
    )
}
//component={LoosginScreen}