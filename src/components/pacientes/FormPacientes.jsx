import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { pacientesAdd, pacientesClearActiveUpdated, pacientesUpdate } from '../../actions/pacientes';
import { useForm } from '../../hooks/useForm';

const initialState = {
    
        nombre:'',
        app:'',
        apm:'',
        sexo:'',
        edad:'',
        peso:'',
        talla:''

    
}
export const FormPacientes = () => {

    const sexos = JSON.parse(localStorage.getItem('sexos')) || [];

    const {activeUpdate} = useSelector(state => state.pacientes);
    const [formValues,handleInputChange,setValues]= useForm(initialState);
    const {nombre,app,apm,sexo,edad,peso,talla} = formValues;

    useEffect(() => {
        if(activeUpdate){
            setValues(activeUpdate);
        }else{
            setValues(initialState);
        }
    }, [setValues,activeUpdate]);


    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(nombre.trim().length <=0 || app.trim().length <=0 || apm.trim().length <=0 || sexo.trim().length <=0){
            Swal.fire('Error','Faltan campos por llenar','error');
        }else{

           if(activeUpdate){
                dispatch(pacientesUpdate(formValues));
                
           }else{
            dispatch(pacientesAdd(formValues));
           }

            
              
        }

    }

    const handleButtonCancel = () => {
        dispatch(pacientesClearActiveUpdated());
    }
 

    return (
        <div className='form__main-50 mt-5'>
            <form  
                onSubmit={handleSubmit}
                className='form__main-content'>
                <h3 className='form__title'>
                    <span className='form__title-span'>{activeUpdate ? "Actualiar paciente" : "Nuevo Paciente"}</span>
                </h3>
                <p className='form__paragraph mt-5'>Información personal</p>
                <input 
                    className='form__input'
                    type="text"
                    placeholder='Nombre'
                    name='nombre'
                    value={nombre}
                    onChange={handleInputChange}
                    autoComplete='off'/>
                <input 
                    className='form__input'
                    type="text"
                    placeholder='Apellido Paterno'
                    name='app'
                    value={app}
                    onChange={handleInputChange}
                    autoComplete='off'/>
                <input 
                    className='form__input'
                    type="text"
                    placeholder='Apellido Materno'
                    name='apm'
                    value={apm}
                    onChange={handleInputChange}
                    autoComplete='off'/>

                <select 
                    required 
                    className="form-select"
                    size="3" 
                    aria-label="size 3 select example" 
                    name="sexo"
                    onChange={handleInputChange}
                    value={activeUpdate ? activeUpdate.sexo : undefined}>
                    <option  >Seleccione el sexo</option>
                    {
                        sexos.map(sexo => (
                            <option
                            value={sexo.id}
                            key={sexo.id}>{sexo.sexo}</option>
                        ))
                    }
                </select>

                <input 
                    className='form__input'
                    type="text"
                    placeholder='Edad'
                    name='edad'
                    value={edad}
                    onChange={handleInputChange}
                    autoComplete='off'/>

                <input 
                    className='form__input'
                    type="text"
                    placeholder='Peso'
                    name='peso'
                    value={peso}
                    onChange={handleInputChange}
                    autoComplete='off'/>

                <input 
                    className='form__input'
                    type="text"
                    placeholder='Talla'
                    name='talla'
                    value={talla}
                    onChange={handleInputChange}
                    autoComplete='off'/>

                <button
                    className='cbtn cbtn-success'
                    type='submit'>
                    subir
                </button>
                {
                    activeUpdate && 
                        <button
                            className='cbtn cbtn-warning'
                            onClick={handleButtonCancel}
                            type='cancel'>
                            Cancelar
                        </button>
                }
            </form>
        </div>
    )
}
