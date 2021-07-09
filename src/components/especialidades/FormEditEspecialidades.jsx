import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { especialdiadUpdate,especialidadClearActive } from '../../actions/especialidades';
import { useForm } from '../../hooks/useForm';


export const FormEditEspecialidades = () => {
    const {especialidaActive} = useSelector(state => state.especialidad);

    const [values,handleInputChange,reset] = useForm(especialidaActive);

    const activeId = useRef(especialidaActive.id)

    useEffect(() => {

        if(especialidaActive.id !== activeId.current){

            reset(especialidaActive);

            activeId.current = especialidaActive.id;
        }

    }, [especialidaActive,reset]);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(especialidadActive(values.id));
    // }, [dispatch,values]);
    
    
    const {especialidad} = values;

    

    const handleButtonCancel = () => {
        dispatch(especialidadClearActive());
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(especialdiadUpdate(values));
        dispatch(especialidadClearActive());
        Swal.fire('Especilidad actualizada','La especialidad ha sido actualizada','success');
    }

    return (
        <div className="form__main-50 cmt-5">

            <form onSubmit={handleUpdate} className='form__main-content'>
                <h3 className="form__title">Actualizar Especialidad</h3>

                <input className="form__input" type="text" placeholder='especialidad' name='especialidad' value={especialidad}
                    onChange={handleInputChange} />

                <button type='submit' className='cbtn cbtn-success' >Actualizar</button>
                <button type='cancel' className='cbtn cbtn-danger' onClick={handleButtonCancel}>Cancelar</button>
            </form>
        </div>
    )
}