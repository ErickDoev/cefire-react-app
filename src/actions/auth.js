import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { finishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2';


export const login = (uid,displayName) => ({

    type:types.login,
    payload:{uid,displayName}

});

export const register = (name,email,password) => ({

    type:types.register,
    payload:{name,email,password}

});

export const startLoginWithEmailPassword = (email,password) => {

    return (dispatch) => {


        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user}) => {
            dispatch(login(user.uid,user.displayName));
            dispatch(finishLoading());
        })
        .catch(({message}) => {
            
            dispatch(finishLoading());
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: message,
            });
        });
       
    }
    
}


export const startRegisterWithEmailPassword = (email,password,name) => {

    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async ({user}) => {
            
            await user.updateProfile({
                displayName:name
            })
            
            dispatch(login(user.uid,user.displayName));

        })
        .catch(({message}) => {

            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: message,
            })
        })

    }
}

export const startGoogleLogin = () => {

    return(dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(login(user.uid,user.displayName));
        })
        .catch(e => console.log(e));
    }

}


export const logout = () => ({
    type:types.logout   
})

export const startLogout = () => {
    return async(dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
    }
}