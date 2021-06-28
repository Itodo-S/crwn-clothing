import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBhYAYz-6aOCxG7xEYNWKm2Gys5C_4RJIs",
  authDomain: "crwn-db-cd143.firebaseapp.com",
  projectId: "crwn-db-cd143",
  storageBucket: "crwn-db-cd143.appspot.com",
  messagingSenderId: "274153570220",
  appId: "1:274153570220:web:3070c12ac2b14bda8b0409",
  measurementId: "G-TVB8BWLFHC"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
