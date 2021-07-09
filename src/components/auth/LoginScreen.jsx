import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import { UserContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginWithEmailPassword } from "../../actions/auth";
import { Link } from 'react-router-dom';
export const LoginScreen = () => {

    //const {dispatch} = useContext(UserContext);

    const [{email,password}, handleInputChange] = useForm({
        email:'erick@gmail.com',
        password:'palomaluna'
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLoginWithEmailPassword(email,password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    const {loading} = useSelector(state => state.ui);
    
    return (
        <div className='auth__box-container mb-5'>
            <h1 className='auth__title'>Login Screen</h1>
            
            <form className='auth_form' onSubmit={handleSubmit}>
                <label className='auth__label'>
                    <i className="fas fa-user "></i>
                </label>
                <input 
                    className='auth__input'
                    autoComplete='off'
                    type="text"
                    placeholder='email'
                    name='email'
                    value={email}
                    onChange={handleInputChange}/>

                    <label className='auth__label'>
                        <i className="fas fa-lock"></i>
                    </label>
                <input 
                    className='auth__input'
                    autoComplete='off'
                    type="password" 
                    placeholder='password'
                    name='password'
                    value={password}
                    onChange={handleInputChange}/>
                <button 
                    type='submit'
                    className="cbtn cbtn-primary cbtn-block"
                    disabled={loading}
                    >
                    Login
                </button>
                
            </form>

            <div className="auth__social-networks">
                        <p>Login with social networks</p>
                            <div 
                                className="google-btn"
                                onClick = {handleGoogleLogin}
                            >
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </div>
                            <p className="cbtn-text">
                                <b>Sign in with google</b>
                            </p>
                        </div>
                    </div>

            <Link className="link" to="/auth/register">
                Create new acount
            </Link>
            
        </div>
    )
}
