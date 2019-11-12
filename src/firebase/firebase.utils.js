import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCNIQsd13jUMfb20ktFOjuNt2ecIkLx-qU",
    authDomain: "crwn-db-c009e.firebaseapp.com",
    databaseURL: "https://crwn-db-c009e.firebaseio.com",
    projectId: "crwn-db-c009e",
    storageBucket: "crwn-db-c009e.appspot.com",
    messagingSenderId: "820152936597",
    appId: "1:820152936597:web:f5402a329c65261a9e539c",
    measurementId: "G-5RVW5XG3HW"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists){ 
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
