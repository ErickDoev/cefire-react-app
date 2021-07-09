import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { EditEmpleado } from './EditEmpleado';
import { FormEmpleados } from './FormEmpleados';
//import { ListEmpleados } from './ListEmpleados';
import { TableEmpleado } from './TableEmpleado';


export const EmpleadosScreen = () => {

    const {active,edit} = useSelector(state => state.empleados);

    // useEffect(() => {

    //     localStorage.setItem('empleados',JSON.stringify(empleados));
        
    // }, [empleados])
    
    return (
        <>
            <div className="cefire__row">
                {
                    edit ? (<EditEmpleado />):(<FormEmpleados />)
                }
                {/* <ListEmpleados /> */}
            </div>

            {
                active && (<TableEmpleado  />)
            }
            
        </>
    )
}
