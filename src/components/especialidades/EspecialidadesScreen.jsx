import React from 'react'
import { useSelector } from 'react-redux';
import { FormEditEspecialidades } from './FormEditEspecialidades';
import { FormEspecialidades } from './FormEspecialidades';
import { ListEspecialidades } from './ListEspecialidades';

export const EspecialidadesScreen = () => {
    

    const {especialidaActive} = useSelector(state => state.especialidad);

    return (
        
        <div className="cefire__row">
            {
                !especialidaActive ? 
                   ( <FormEspecialidades/>)
                    :
                   ( <FormEditEspecialidades/>)
            
            }
           <ListEspecialidades />
        </div>
        )
    }
