import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { especialidadClearActive, especialidadDelete, especialidadActive} from '../../actions/especialidades';

export const ListEspecialidades = () => {

    const {especialidades} = useSelector(state => state.especialidad);
    
    const dispatch = useDispatch();

    const handleButtonDelete = (id) => {
        dispatch(especialidadDelete(id));    
        dispatch(especialidadClearActive());
        Swal.fire('Especialidad borrada','La especialidad se ha borrado con exito','success');
        
    }
    
    const handleButtonActive = (id) => {
        dispatch(especialidadActive(id));
                
    }

    useEffect(() => {
       localStorage.setItem('especialidades',JSON.stringify(especialidades));
    }, [especialidades])

    
    return (
        <div className="table__main-50 mt-5">
                <h3 className="table__title"><span className="table__title-span">Especialidades</span></h3>
                <table className="table__main-content">
                    <thead className="table__head">
                        <tr>
                            <th>ID</th>
                            <th>Especialidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                especialidades.map( e => (
                                    <tr key={e.id}>
                                        <th>{e.id}</th>
                                        <th>{e.especialidad}</th>
                                        <th>
                                            <i 
                                                onClick={()=>{handleButtonDelete(e.id)}}
                                                className="fas fa-trash fas button__icon"></i>
                                            <i 
                                                onClick={()=>{handleButtonActive(e.id)}}
                                                className="fas fa-edit button__icon"></i>    
                                        </th>
                                      
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
                   
            </div>
    )
}
