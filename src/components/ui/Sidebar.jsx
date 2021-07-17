import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { startLogout } from '../../actions/auth';
export const Sidebar = () => {
    // const {dispatch} = useContext(UserContext)
    // const handleButtonClick = () => {
    //     dispatch({
    //         type:'logout'
    //     });
    // }
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <aside className="cefire__sidebar">

            <div className="cefire__sidebar-navbar">
                <div className='cefire__sidebar-logo mb-5'>
                    <h2>Cefire App</h2>
                </div>
                <ul className="cefire__sidebar-list mt-5">
                    
                    <li className="cefire__sidebar-element" ><Link to='/empleados' ><i className="fas fa-user-tie"></i> Empleados</Link></li>
                    <li className="cefire__sidebar-element" ><Link to='/especialidades' ><i className="fas fa-hospital-alt"></i> Especialidades</Link></li>
                    
                    <li className="cefire__sidebar-element" ><Link to='/pacientes' ><i className="fas fa-user"></i> Pacientes</Link></li>
                    
                    <li className="cefire__sidebar-element" ><Link to='/consultas' ><i className="fas fa-calendar-alt"></i> Consultas</Link></li>
                    
                    
                </ul>
            </div>

            
            <button 
                className='cbtn cbtn-warning cbtn-block cmb-5'
                type='submit'
                onClick={handleLogout}
                >LogOut
            </button>
        </aside>
    )
}
