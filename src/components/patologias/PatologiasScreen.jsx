import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import { patologiasReducer } from '../../reducers/patologiasReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('patologias')) || [];
}
export const PatologiasScreen = () => {

    const [values,handleInputChange] = useForm({
        id:'',
        patologia:''
    });
    const {id,patologia} = values;

    const [state, dispatch] = useReducer(patologiasReducer, [],init);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(id.trim().length <= 0 || patologia.trim().length <= 0){
            console.log('id o patologia vacios');
        }else{
            if(state.find(patologia => patologia.id === id )){
                console.log('id ocupado');
            }else{
                dispatch({
                    type:'add',
                    payload:{
                        id,
                        patologia
                    }
                });
            }
        }
    }
    useEffect(() => {
        localStorage.setItem('patologias',JSON.stringify(state));
        
    }, [state])

    const handleButtonDelete = (id) =>{
        dispatch({
            type:'delete',
            payload:id
        });
    }
    return (
        <>
            <h1>Patologias Screen</h1>

            <form onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    name="id"
                    value={id}
                    onChange={handleInputChange}
                    placeholder="id"/>

                <input 
                    type="text"
                    name="patologia"
                    value={patologia}
                    placeholder="patologia"
                    onChange={handleInputChange}/>
                <button >subir</button>
            </form>

            <ul>
                {state.map(patologia => (
                    <li key={patologia.id}>{patologia.id} .- {patologia.patologia}
                        <button onClick={()=>{handleButtonDelete(patologia.id)}}>Borrar</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
