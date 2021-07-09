import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { ItemEmpleado } from './ItemEmpleado';

export const ListEmpleados = () => {

    const {empleados} = useSelector(state => state.empleados);
    
    return (
        <>
            <Link to='/empleados-registro' className="cbtn cbtn-primary">Desea agregar a un nuevo empleado?</Link>
            <div className="table__main mt-5">
                <h3 className='table__title'>
                    <span className='table__title-span'>Empleados registrados</span>
                </h3>
                <table className='table__main-content'>

                    <thead className='table__head'>

                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Especialidad</th>
                            <th>Acciones</th>
                        </tr>

                    </thead>
                    <tbody>
                        {empleados.map(empleado => (
                        
                            <ItemEmpleado
                                key={empleado.id}
                                id={empleado.id}    
                                nombre={empleado.nombre} 
                                app={empleado.app}
                                apm={empleado.apm}
                                especialidad={empleado.especialidad}
                                telefono={empleado.numeroTel}
                                sexo={empleado.sexo}
                                curp={empleado.curp}
                                rfc={empleado.rfc}
                                cedula={empleado.cedula}
                                estado={empleado.estado}
                                cp={empleado.cp}
                                ciudad={empleado.ciudad}
                                municipio={empleado.municipio}
                                calle={empleado.calle}
                                numInt={empleado.numInt}
                                numExt={empleado.numExt}
                                numeroCasa={empleado.numeroCasa}
                                correoPersonal={empleado.correoPersonal}
                                correoEmpresarial={empleado.correoEmpresarial}
                                patologia={empleado.patologia}
                                peso={empleado.peso}
                                talla={empleado.talla}
                                imgUrl={empleado.imgUrl}
                            />
                                            
                        ))}  
                    </tbody>
                </table>
            </div>
        </>

    )
}
