import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { consultaDelete,clearActiveConsulta } from '../../actions/consultas';

export const BtnDelete = () => {

    const {contultaActive} = useSelector(state => state.consultas);
    const dispatch = useDispatch();

    const handleButtonDeleteActive = () => {
        
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
                dispatch(consultaDelete(contultaActive.id));
                dispatch(clearActiveConsulta());
                Swal.fire(
                    'Borrado!',
                    'La consulta ha sido borrada.',
                    'success'
                )
            }
          })
    }

    return (
        <button 
            className="btn btn-danger fab-danger"
            onClick={handleButtonDeleteActive}
        >
            <i className="fas fa-trash"></i>
            <span>Borrar consulta</span>
        </button>
    )
}
