import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA5hAG7kSi8bjQK5yyb0-Jwy2VsFDSUjgc",
    authDomain: "cefire-app-react.firebaseapp.com",
    projectId: "cefire-app-react",
    storageBucket: "cefire-app-react.appspot.com",
    messagingSenderId: "556862117633",
    appId: "1:556862117633:web:b6845fea65fc01c95bed00"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
//autenticacion con google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}