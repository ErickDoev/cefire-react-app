import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { employeDeactive } from '../../actions/empleados';

export const TableEmpleado = () => {

    const {active} = useSelector(state => state.empleados);
    const dispatch = useDispatch();

    const handleCerrar = () => {
        dispatch(employeDeactive());
    }
    
return (
    <div className="cefire__row">
        <div className='table__main mt-5'>
            <h3 className='table__title'>
                <span className='table__title-span'>Información del empleado</span>
            </h3>
            <table className='table__main-content'>
                <thead className='table__head'>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{active.id}</td>
                        <td>{active.nombre}</td>
                        <td>{active.app}</td>
                        <td>{active.apm}</td>
                    </tr>
                </tbody>
            </table>
            <div className="table__btn-end cmb-5">
                <button onClick={handleCerrar} className='cbtn cbtn-warning cmt-5'>
                    Cerrar
                </button>
            </div>
        </div>
    </div>

)
}