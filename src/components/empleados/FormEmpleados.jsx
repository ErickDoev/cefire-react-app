import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { employeAdd } from '../../actions/empleados';
import { useForm } from '../../hooks/useForm';


export const FormEmpleados = () => {

    const {empleados} = useSelector(state => state.empleados);
    const especialidades = JSON.parse(localStorage.getItem('especialidades')) || [];

    const [values,handleInputChange] = useForm({
        nombre:'',
        app:'',
        apm:'',
        sexo:'',

        curp:'',
        rfc:'',
        especialidad:'',
        cedula:'',

        estado:'',
        cp:'',
        ciudad:'',
        municipio:'',
        calle:'',
        numInt:'',
        numExt:'',
        
        numeroTel:'',
        numeroCasa:'',
        correoPersonal:'',
        correoEmpresarial:'',

        patologia:'',
        peso:'',
        talla:'',

        imgUrl:''

    });
    
    
    const {nombre,app,apm,sexo,curp,rfc,especialidad,cedula,estado,cp,ciudad,municipio,calle,numInt,numExt,numeroTel,numeroCasa,correoPersonal,correoEmpresarial,patologia,peso,talla, imgUrl} = values;
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if( nombre.trim().length <= 0|| app.trim().length <= 0|| apm.trim().length <= 0){
            Swal.fire('Faltan campos por llenar','Los campos, nombre, apellido materno y paterno son obligatorios','question');
        }else{
           
            dispatch(employeAdd({nombre,app,apm,sexo,curp,rfc,especialidad,cedula,estado,cp,ciudad,municipio,calle,numInt,numExt,numeroTel,numeroCasa,correoPersonal,correoEmpresarial,patologia,peso,talla, imgUrl}));
            Swal.fire('Se ha agregado exitosamente','Un nuevo empleado ha sido registrado','success');
        }
    }

    useEffect(() => {
        localStorage.setItem('empleados',JSON.stringify(empleados));
       
    }, [empleados]);

    return (
        <div className="form__main mt-5">
            <Link to='/empleados' className="cbtn cbtn-primary cmt-5">Regresar</Link>
             <form className='form__main-content' onSubmit={handleSubmit}>
                <h3 className='form__title'>
                    <span className='form__title-span'>Nuevo Empleado</span>
                </h3>
                
                <p className='form__paragraph mt-5 mb-5'>Información personal</p>
                
                <div className="cefire__row">
                    <label className="form__label" htmlFor="">Nombre: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Nombre"
                        name='nombre'
                        value={nombre}
                        onChange={handleInputChange}/>
                    <label className="form__label" htmlFor="">Apellido Paterno: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Apellido Paterno"
                        name='app'
                        value={app}
                        onChange={handleInputChange}/>
                    <label className="form__label" htmlFor="">Nombre: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Apellido Materno"
                        name='apm'
                        value={apm}
                        onChange={handleInputChange}/>

                    <label className="form__label" htmlFor="">Sexo</label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Sexo"
                        name='sexo'
                        value={sexo}
                        onChange={handleInputChange}/>
                </div>

                <p className='form__paragraph mt-5 mb-5'>Información profesional</p>
                <div className="cefire__row">
                    <label className="form__label" htmlFor="">Especialidad: </label>
                    <select 
                        name="especialidad"
                        onChange={handleInputChange}>
                        <option defaultValue >Seleccione la especialidad</option>
                        {especialidades.map(especialidad => (
                            <option
                            value={especialidad.id}
                            key={especialidad.id}>{especialidad.especialidad}</option>
                        ))}
                    </select>
                    <label className="form__label" htmlFor="">CURP: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="CURP"
                        name='curp'
                        value={curp}
                        onChange={handleInputChange}/>

                    <label className="form__label" htmlFor="">R.F.C: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="R.F.C"
                        name='rfc'
                        value={rfc}
                        onChange={handleInputChange}/>
                    <label className="form__label" htmlFor="">Cedula: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Cedula Profesional"
                        name='cedula'
                        value={cedula}
                        onChange={handleInputChange}/>
                    
                              
                </div>

                <p className='form__paragraph mt-5 mb-5'>Dirección</p>
                <div className="cefire__row">
                    <label className="form__label" htmlFor="">Estado: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Estado"
                        name='estado'
                        value={estado}
                        onChange={handleInputChange}/>
                    <label className="form__label" htmlFor="">Ciudad: </label> 
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Ciudad"
                        name='ciudad'
                        value={ciudad}
                        onChange={handleInputChange}/>
                    <label className="form__label" htmlFor="">Municipio: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Correo Empresarial"
                        name='municipio'
                        value={municipio}
                        onChange={handleInputChange}/>    
                    <label className="form__label" htmlFor="">C.P.: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="C.P."
                        name='cp'
                        value={cp}
                        onChange={handleInputChange}/>
                                
                </div>
                <div className="cefire__row"> 
                    <label className="form__label" htmlFor="">Calle: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Calle"
                        name='calle'
                        value={calle}
                        onChange={handleInputChange}/>
                    <label className="form__label" htmlFor="">Num Ext: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Numero Exterior"
                        name='numExt'
                        value={numExt}
                        onChange={handleInputChange}/>
                    <label className="form__label" htmlFor="">Num Int: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Numero Interior"
                        name='numInt'
                        value={numInt}
                        onChange={handleInputChange}/></div>

                <p className='form__paragraph mt-5 mb-5'>Información de contacto</p>
                <div className="cefire__row">
                    <label className="form__label" htmlFor="">Telefono: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Numero de Telefono"
                        name='numeroTel'
                        value={numeroTel}
                        onChange={handleInputChange}/>
                    <label className="form__label" htmlFor="">Tel. casa: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Numero de Casa"
                        name='numeroCasa'
                        value={numeroCasa}
                        onChange={handleInputChange}/>
                    <label className="form__label" htmlFor="">Correo: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Correo Personal"
                        name='correoPersonal'
                        value={correoPersonal}
                        onChange={handleInputChange}/>
                    <label className="form__label" htmlFor="">Correo Emp.: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Correo Empresarial"
                        name='correoEmpresarial'
                        value={correoEmpresarial}
                        onChange={handleInputChange}/>
                </div>

                <p className='form__paragraph mt-5 mb-5'>Información clinica</p>
                <div className="cefire__row">
                    <label className="form__label" htmlFor="">Patologia: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Patologia"
                        name='patologia'
                        value={patologia}
                        onChange={handleInputChange}/>
                    <label className="form__label" htmlFor="">Peso: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Peso"
                        name='peso'
                        value={peso}
                        onChange={handleInputChange}/>
                    <label className="form__label" htmlFor="">Talla: </label>
                    <input 
                        className='form__input'
                        type="text"
                        placeholder="Talla"
                        name='talla'
                        value={talla}
                        onChange={handleInputChange}/>
                </div>
                           
                <button
                    className='cbtn cbtn-success cmt-5'
                    type='submit'>
                    subir
                </button>

            </form>
        </div>
    )
}
