import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ConsultasScreen } from '../components/consultas/ConsultasScreen'
import { EditEmpleado } from '../components/empleados/EditEmpleado'
//import { EmpleadosScreen } from '../components/empleados/EmpleadosScreen'
import { FormEmpleados } from '../components/empleados/FormEmpleados'
import { ListEmpleados } from '../components/empleados/ListEmpleados'
import { EspecialidadesScreen } from '../components/especialidades/EspecialidadesScreen'
import { HorariosScreen } from '../components/horarios/HorariosScreen'
import { PacientesScreen } from '../components/pacientes/PacientesScreen'
import { PatologiasScreen } from '../components/patologias/PatologiasScreen'
import { SexosScreen } from '../components/sexos/SexosScreen'

import { Sidebar } from '../components/ui/Sidebar'
//import { Topbar } from '../components/ui/Topbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Sidebar />
            
            <div className='cefire__side-content'>
            {/* <Topbar /> */}
            {/* <Infobar /> */}
                {/* <ul className="cefire__sidebar-lista">
                    <li className="cefire__sidebar-elementa mt-5" ><Link to='/empleados'>Empleados</Link></li>
                    <li className="cefire__sidebar-elementa" ><Link to='/empleados-registro' >Registro</Link></li>
                    <li className="cefire__sidebar-elementa" ><Link to='/empleados-editar' >Edit</Link></li>
                </ul> */}
                <Switch >
                   
                    <Route
                        exact 
                        path='/empleados'
                        component={ListEmpleados}/>

                    <Route
                        exact 
                        path='/empleados-registro'
                        component={FormEmpleados}/>

                    <Route
                        exact 
                        path='/empleados-editar/:empleadoId'
                        component={EditEmpleado}/>

                    <Route
                        exact 
                        path='/especialidades'
                        component={EspecialidadesScreen}/>

                    <Route
                        exact 
                        path='/horarios'
                        component={HorariosScreen}/>

                    <Route
                        exact 
                        path='/pacientes'
                        component={PacientesScreen}/>

                    <Route
                        exact 
                        path='/patologias'
                        component={PatologiasScreen}/>

                    <Route
                        exact 
                        path='/sexos'
                        component={SexosScreen}/>

                    <Route
                        exact 
                        path='/consultas'
                        component={ConsultasScreen}/>

                    <Redirect to='/empleados'/>
                </Switch>
            </div>
        </>
    )
}
