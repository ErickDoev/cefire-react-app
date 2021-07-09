import { useSelector } from 'react-redux';
//import { UserContext } from '../../context/UserContext';

export const Topbar = () => {

    //const {user} = useContext(UserContext);

    const {name} = useSelector(state => state.auth);

    return (
        <nav className='cefire__topbar'>
            <div className='cefire__navbar'>
                <div className='cefire__navbar-email'>¡Bienvenido {name}!</div> 
                <div className='cefire__navbar-user'><i className="fas fa-user fa-2x"></i></div>
            </div>
        </nav>
    )
}
