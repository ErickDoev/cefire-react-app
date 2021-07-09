import React from 'react'
import { useSelector } from 'react-redux';
import { ItemPaciente } from './ItemPaciente';


export const ListPacientes = () => {

   
    const {pacientes} = useSelector(state => state.pacientes);
    return (
        <div className="table__main-50 mt-5">
            <h3 className='table__title'>
                <span className='table__title-span'>Pacientes registrados</span>
            </h3>
            <table className='table__main-content'>

                <thead className='table__head'>

                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido P</th>
                        <th>Appelido M</th>
                        <th>Edad</th>
                        <th>Acción</th>
                    </tr>

                </thead>
                <tbody>
                    {pacientes.map(paciente => (
                    
                        <ItemPaciente
                            key={paciente.id}
                            id={paciente.id}    
                            nombre={paciente.nombre} 
                            sexo={paciente.edad}
                            app={paciente.app}
                            apm={paciente.apm}
                        />
                                        
                    ))}
                </tbody>
            </table>
        </div>
    )
}
