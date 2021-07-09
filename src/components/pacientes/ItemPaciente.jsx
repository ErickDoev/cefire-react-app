import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2';
import { pacienteActive, pacienteClearActive, pacienteDelete, pacienteSetUpdateActive } from '../../actions/pacientes'

export const ItemPaciente = ({id,nombre,sexo,app,apm}) => {


    const dispatch = useDispatch();
    const handleDelete = (idPaciente) => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "No se podra revertir el cambio!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borralo!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(pacienteDelete(idPaciente));
                dispatch(pacienteClearActive());
                Swal.fire(
                    'Borrado!',
                    'La consulta ha sido borrada.',
                    'success'
                )
            }
          })
        
    }

    const handleSetActive = (idPaciente) => {
        dispatch(pacienteActive(idPaciente));
    }
    const handleSetUpdateActive = (id) => {

        dispatch(pacienteSetUpdateActive(id));
    }

    return (
                
            <tr >
                <td> {id} </td>
                <td> {nombre} </td>
                <td> {app} </td>
                <td> {apm} </td>
                <td> {sexo} </td>
                <td> 
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button
                        type="button"
                        onClick={()=>{handleDelete(id)}}
                        className='cbtn cbtn-danger '
                    >Borrar
                    </button>
                    <button
                        type="button"
                        onClick={()=>{handleSetActive(id)}}
                        className='cbtn cbtn-primary'
                    >Ver
                    </button>
                    <button 
                        type="button"
                        onClick={()=>{handleSetUpdateActive(id)}}
                        className='cbtn cbtn-info'>
                        Actualizar
                        </button>
                    </div>
                </td>

            </tr>


    )
}
