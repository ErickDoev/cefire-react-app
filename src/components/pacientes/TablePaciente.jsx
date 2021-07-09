import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pacienteClearActive } from '../../actions/pacientes';


export const TablePaciente = () => {

    const {active:paciente} = useSelector(state => state.pacientes);
    const dispatch = useDispatch();

    const handleButtonClose =() => {
        dispatch(pacienteClearActive());
    }


    return (

        <div className="cefire__row">
            <div className='table__main mt-5'>
                <h3 className='table__title'>
                    <span className='table__title-span'>Información del paciente</span>
                </h3>
                    <table className='table__main-content'>
                        <thead className='table__head'>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido Materno</th>
                                <th>Sexo</th>
                                <th>Peso</th>
                                <th>Talla</th>
                                <th>Edad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{paciente.id}</td>
                                <td>{paciente.nombre}</td>
                                <td>{paciente.app}</td>
                                <td>{paciente.apm}</td>
                                <td>{paciente.sexo}</td>
                                <td>{paciente.peso}</td>
                                <td>{paciente.talla}</td>
                                <td>{paciente.edad}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="table__btn-end mb-5">
                        <button 
                            onClick={handleButtonClose}
                            className='cbtn cbtn-warning mt-5'>
                        Cerrar
                        </button>

                    </div>
            </div>
        </div>
    )
}
