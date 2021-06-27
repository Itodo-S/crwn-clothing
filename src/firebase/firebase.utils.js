import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
    apiKey: "AIzaSyBhYAYz-6aOCxG7xEYNWKm2Gys5C_4RJIs",
    authDomain: "crwn-db-cd143.firebaseapp.com",
    projectId: "crwn-db-cd143",
    storageBucket: "crwn-db-cd143.appspot.com",
    messagingSenderId: "274153570220",
    appId: "1:274153570220:web:3070c12ac2b14bda8b0409",
    measurementId: "G-TVB8BWLFHC"
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
