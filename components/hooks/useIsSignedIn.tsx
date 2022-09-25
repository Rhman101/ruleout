// Import FirebaseAuth and firebase.
import 'firebase/compat/auth';
import { firebaseConfig } from '../../firebase/firebase';
import firebase from 'firebase/compat/app';
import { useState, useEffect } from 'react';

firebase.initializeApp(firebaseConfig);

const useIsSignedIn = <T,>(): [boolean, () => void] => {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local hook's signed-in state.

    // Listen to the Firebase Auth state and set the local hook's state.
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    const signOut = () => {
        firebase.auth().signOut()
    }

    // Publish the signed-in state in a hook. 
    return [isSignedIn, signOut]

}
export default useIsSignedIn;