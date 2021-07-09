import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { empleyeeCancel, employeDeactive, employeeActiveEdit, employeeEdit } from '../../actions/empleados';
import { useForm } from '../../hooks/useForm';

export const EditEmpleado = () => {

    const especialidades = JSON.parse(localStorage.getItem('especialidades')) || [];
    const {edit} = useSelector(state => state.empleados);
    const [values,handleInputChange,reset] = useForm(edit);
    const {id,nombre,app,apm,especialidad} = values;
    
    const activeIdEdit = useRef(edit.id);

    useEffect(() => {

        if(edit.id !== activeIdEdit.current){
            reset( edit );
            activeIdEdit.current = edit.id;
        }

         
    }, [edit,reset]);

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(employeeActiveEdit(values.id,{...values}));
        
    }, [values,dispatch]);


    
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(id.trim().length <= 0 || nombre.trim().length <= 0|| app.trim().length <= 0|| apm.trim().length <= 0){
            console.log('faltan campos por llenar');
        }else{

            dispatch(employeeEdit(id,{nombre,app,apm,especialidad}));
            Swal.fire('El empleado se ha acualizado con exito','Accion realizada','success');
            dispatch(empleyeeCancel());
        }
    }

    const handleCancel = () => {
        dispatch(empleyeeCancel());
    }

    return (
        <div className="form__main mt-5">
             <form className='form__main-content' onSubmit={handleSubmit}>
                <h3 className='form__title'>
                    <span className='form__title-span'>Editar Empleado</span>
                </h3>
                <p className='form__paragraph mt-5'>Información personal</p>
                <input 
                    className='form__input'
                    type="number"
                    placeholder="id"
                    name='id'
                    readOnly
                    value={id}
                    onChange={handleInputChange}/>
                <input 
                    className='form__input'
                    type="text"
                    placeholder="nombre"
                    name='nombre'
                    value={nombre}
                    onChange={handleInputChange}/>
                <input 
                    className='form__input'
                    type="text"
                    placeholder="Apellido Paterno"
                    name='app'
                    value={app}
                    onChange={handleInputChange}/>
                <input 
                    className='form__input'
                    type="text"
                    placeholder="Apellido Materno"
                    name='apm'
                    value={apm}
                    onChange={handleInputChange}/>
            

                <select 
                    name="especialidad"
                    onChange={handleInputChange}>

                    {especialidades.map(especialidad => (
                        <option
                            defaultValue={edit.especialidad}
                            value={especialidad.id}
                            key={especialidad.id}>{especialidad.especialidad}
                         </option>
                    ))}
                </select>

                
                <button
                    className='btn btn-success mt-1'
                    type='submit'>
                    Actualizar
                </button>

                <button
                    className='btn btn-warning mt-1'
                    type='submit'
                    onClick={handleCancel}>
                    Cancelar
                </button>

            </form>
        </div>
    )
}
