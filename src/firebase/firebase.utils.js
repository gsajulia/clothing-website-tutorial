import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDOG9e90UEnfax6PcEYa9OenuJ7wpp5QSQ",
    authDomain: "clothing-db-tutorial.firebaseapp.com",
    databaseURL: "https://clothing-db-tutorial.firebaseio.com",
    projectId: "clothing-db-tutorial",
    storageBucket: "clothing-db-tutorial.appspot.com",
    messagingSenderId: "632244927695",
    appId: "1:632244927695:web:70c4d8a0a24a0a6e460bba",
    measurementId: "G-587J1QWPP1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;