//import React, { useContext } from 'react'
//import { UserContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';
import validator from "validator";
//import { register } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPassword } from '../../actions/auth';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {

    const [{name,email,password,password2},handleInputChange] = useForm({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    // const {dispatch} = useContext(UserContext);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isFormValid()){
            
            dispatch(startRegisterWithEmailPassword(email,password,name));

        }

    }

    const isFormValid = () => {

        if(name.trim().length === 0){
            console.log('name is required');
            dispatch(setError('name is required'));
            return false;
        }else if(!validator.isEmail(email)){
            console.log('email is required');
            dispatch(setError('email is required'));
            return false;
        }else if(password !== password2 || password.length < 5){
            console.log('Password should be at least 6 caracters and match each other');
            dispatch(setError('Password should be at least 6 caracters and match each other'));
            return false;
        }

        dispatch(removeError());
        return true;

    }

    const {msgError} = useSelector(state => state.ui);
    


    return (
        <div className='auth__box-container'>

            <h1 className='auth__title'>Login Screen</h1>
            <form className='auth_form' onSubmit={handleSubmit}>

                {
                    msgError &&
                    (   
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )


                }
                <input 
                    className='auth__input'
                    type="text"
                    placeholder='Name'
                    name='name'
                    value={name}
                    autoComplete='off'
                    onChange={handleInputChange}/>
                    
                <input type="text"
                    className='auth__input'
                    placeholder='Email'
                    name='email'
                    value={email}
                    autoComplete='off'
                    onChange={handleInputChange}/>
                <input 
                    className='auth__input'
                    type="password"
                    placeholder='Password'
                    name='password'
                    value={password}
                    autoComplete='off'
                    onChange={handleInputChange}/>

                <input
                    className='auth__input'
                    type="password"
                    placeholder='Confirm Password'
                    name='password2'
                    value={password2}
                    autoComplete='off'
                    onChange={handleInputChange}/>

                <button 
                    className="btn btn-primary"
                    type='submit'>
                    Register
                </button>

            </form>
            <Link className="link" to="/auth/login">
                Already registered?
            </Link>
        </div>
    )
}
