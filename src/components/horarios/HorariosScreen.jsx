import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import { horariosReducer } from '../../reducers/horariosReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('horarios')) || [];  
}
export const HorariosScreen = () => {

    const [values,handleInputChange] = useForm({
        id:'',
        horario:''
    })

    const {id,horario} = values;
    const [state, dispatch] = useReducer(horariosReducer, [], init)
    const handleSubmit = (e) => {
        e.preventDefault();
        if(id.length <= 0 || horario.length <= 0){
            console.log('ID u Horario vacios');
        }else{
            if(state.find(horario => horario.id === id)){
                console.log('ID no disponible');
            }else{
                dispatch({
                    type:'add',
                    payload:{
                        id,
                        horario
                    }
                });
            }
        }
    }

    useEffect(() => {
        localStorage.setItem('horarios',JSON.stringify(state));
        
    }, [state])

    const handleButtonDelete = (id) => {
        dispatch({
            type:'delete',
            payload:id
        });
    }
    return (
        <>
            <h1>Horarios Screen</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number"
                    name='id'
                    value={id}
                    placeholder='id'
                    onChange={handleInputChange}
                    />

                <input 
                    type="text"
                    name='horario'
                    value={horario}
                    placeholder='horario'
                    onChange={handleInputChange}
                    />

                <button
                    type='submit'>
                    Agregar
                </button>
            </form>

            <ul>
                {state.map(horario => (
                        <li key={horario.id}> {horario.id} .- {horario.horario}
                            <button onClick={()=>{handleButtonDelete(horario.id)}}>Borrar</button>
                        </li>
                        
                ))}
            </ul>
        </>
    )
}
