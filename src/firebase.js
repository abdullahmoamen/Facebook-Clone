// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCWLC_hR8qMXGIrc7Rkq8bYtUhHM9aMOPA",
    authDomain: "facebook-3fe19.firebaseapp.com",
    projectId: "facebook-3fe19",
    storageBucket: "facebook-3fe19.appspot.com",
    messagingSenderId: "1075232379041",
    appId: "1:1075232379041:web:f335063595ece701a220e0",
    measurementId: "G-HQQGGWSFVQ"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;