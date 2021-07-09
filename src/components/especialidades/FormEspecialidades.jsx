import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { especialidadesAdd } from '../../actions/especialidades';
import { useForm } from '../../hooks/useForm';


export const FormEspecialidades = () => {
    const dispatch = useDispatch();
    const [values,handleInputChange] = useForm({
        especialidad:''
    });

    const {especialidad} = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        if( especialidad.trim().length <= 0 ){
            Swal.fire('Faltan campos por llenar','El campo de especialidad no debe estar vacio','error');
        } else{
            dispatch(especialidadesAdd(values)); 
            Swal.fire('Especialidad registrada','La especialidad se ha guardado exitosamente','success')
        }
    }

    return (
        <div className="form__main-50 mt-5">

            <form onSubmit={handleSubmit} className='form__main-content'>
                <h3 className="form__title">Nueva Especialidad</h3>

                <input className="form__input" type="text" placeholder='especialidad' name='especialidad' value={especialidad}
                    onChange={handleInputChange} />

                <button type='submit' className='cbtn cbtn-success'>Subir</button>
            </form>
        </div>
    )
}