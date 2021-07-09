import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import { sexoReducer } from '../../reducers/sexoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('sexos')) || [];
}
export const SexosScreen = () => {

    const [values,handleInputChange] =useForm({
        id:0,
        sexo:''
    });
    const {id,sexo} = values;
    
    const [value,dispatch] = useReducer(sexoReducer, [],init);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(sexo.trim().length === 0 || id.trim().length === 0){
            console.log('Id o sexo vacios');

        }else{
            if(value.find(s => s.id === id)){
                console.log('ya hay un id con ese valor');
            }else{
                dispatch({
                    type:'add',
                    payload:{
                        id,
                        sexo
                    } 
                });
            }
        }
    }

    useEffect(() => {
        localStorage.setItem('sexos',JSON.stringify(value));        

    }, [value])

    const handleButtonCancel =() => {
        console.log(value);
    }

    const handleDelete = (id) => {
        dispatch({
            type:'delete',
            payload:id  
        });

    }

    
    return (
        <>
            <h1>Sexos Screen</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number"
                    placeholder='id'
                    name='id'
                    value={id}
                    onChange={handleInputChange}/>
                <input 
                    type="text"
                    placeholder='sexo'
                    name='sexo'
                    value={sexo}
                    onChange={handleInputChange}/>
                
                <button
                    type='submit'
                    className=''
                    >Subir</button>
                <button
                    type='reset'
                    className=''
                    onClick={handleButtonCancel}>Cancelar</button>
            </form>

            <ul>
                {value.map((sexo)=> (
                   <li key={sexo.id}><span>{`${sexo.id} .-`}</span> 
                    {sexo.sexo}
                    <button onClick={()=>{handleDelete(sexo.id)}}>Borrar</button>
                    </li>
                   
                ))} 
            </ul>
        </>
    )
}
