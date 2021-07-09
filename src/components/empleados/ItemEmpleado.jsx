import React from 'react'
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {  employeDelete} from '../../actions/empleados';

export const ItemEmpleado = ( {id ,nombre,app,apm,especialidad}) => {

    const dispatch = useDispatch();
    
    const handleButtonDelete = (id) => {
        
        Swal.fire({
            title: 'Estas seguro de que quieres borrar este empleado?',
            showCancelButton: true,
            confirmButtonText: `Confirmar`,
            denyButtonText: `No se ha borrado el elemento`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(employeDelete(id));
              Swal.fire('Borrado!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
        
    }

    // const handleButtonActive = (id) => {
    //     dispatch(employeActive(id,nombre,app,apm,especialidad));
    // }

    // const handleButtonActiveEdit = (id) => {


    //     dispatch(employeeActiveEdit(id,{nombre,app,apm,sexo,curp,rfc,especialidad,cedula,estado,cp,ciudad,municipio,calle,numInt,numExt,numeroTel,numeroCasa,correoPersonal,correoEmpresarial,patologia,peso,talla, imgUrl}));
    // }

    return (
        <tr >
                <td> {id} </td>
                <td> {nombre} </td>
                <td> {app} </td>
                <td> {apm} </td>
                <td> {especialidad} </td>
                <td > 
                    <i className="fas fa-trash-alt button__icon" onClick={()=>{handleButtonDelete(id)}}></i>
                    {/* <i class="fas fa-user-edit"  onClick={()=>{handleButtonActive(id)}}></i> */}
                    {/* <button className="btn btn-primary" onClick={()=>{handleButtonActiveEdit(id)}}>Editar</button> */}
                    <Link to = {`./empleados-editar/${id}`} className="fas fa-user-edit button__icon">

                    </Link>
                </td>

            </tr>
    )
}
