// Import FirebaseAuth and firebase.
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import { useState, useEffect } from 'react';
import { Firestore, getFirestore } from 'firebase/firestore';
import {firebaseConfig} from './../../firebase/firebase';

const app = firebase.initializeApp(firebaseConfig)
const db = getFirestore(app);

const useIsSignedIn = <T,>(): [boolean, () => void, Firestore, string] => {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local hook's signed-in state.
    const [email, setEmail] = useState('');

    // Listen to the Firebase Auth state and set the local hook's state.
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
            if (user?.email) { 
                setEmail(user.email);
            }
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    const signOut = () => {
        firebase.auth().signOut()
    }

    // Publish the signed-in state in a hook. 
    return [isSignedIn, signOut, db, email]

}
export default useIsSignedIn;