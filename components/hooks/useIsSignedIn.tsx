// Import FirebaseAuth and firebase.
import 'firebase/compat/auth';
import { firebaseConfig } from '../../firebase/firebase';
import firebase from 'firebase/compat/app';
import { useState, useEffect } from 'react';

firebase.initializeApp(firebaseConfig);

const useIsSignedIn = <T,>(): [boolean, () => void] => {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local hook's signed-in state.

    // useEffect(() => {
    //     console.log({isSignedIn})
    // });

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

    // if (!isSignedIn) {
    //     return (
    //         <Stack
    //         sx={{minHeight: '400px'}}
    //         // direction="row"
    //         // justifyContent="center"
    //         // alignItems="center"
    //         // spacing={2}
    //         >
    //             <Typography variant='h3' color={theme.palette.getContrastText(theme.palette.primary.main)}>Log in here: </Typography>
    //             <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    //         </Stack>
    //     );
    // }
    // return (
    //     <Stack
    //     // direction="row"
    //     // justifyContent="center"
    //     // alignItems="center"
    //     // spacing={2}
    //     >
    //         <Typography variant='h3'>Sign in here: </Typography>
    //         <p>Welcome {firebase.auth().currentUser?.displayName ? firebase.auth().currentUser?.displayName : 'Person-who-should-not-be-logged-in'}! You are now signed-in!</p>
    //         <button onClick={handleGetAuth}>Get auth</button>
    //         <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
    //     </Stack>
    // );
}
export default useIsSignedIn;