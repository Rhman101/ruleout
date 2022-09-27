// Import FirebaseAuth and firebase.
import 'firebase/compat/auth';
import { firebaseConfig } from '../firebase/firebase';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import React, { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useIsSignedIn from './hooks/useIsSignedIn';
import { useRouter } from 'next/router';

firebase.initializeApp(firebaseConfig)

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    //   signInSuccessUrl: '/signedIn',
    callbacks: {
        signInSuccessWithAuthResult: () => false,
    },
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
    ],
};
export default function SignInPage() {
    const [isSignedIn, signOut] = useIsSignedIn();
    useEffect(() => console.log('isSignedIn in SignIn page', { isSignedIn }));

    const handleGetAuth = () => {
        let x = getAuth();
        console.log('x', x);
    }

    const theme = useTheme();
    const router = useRouter();

    useEffect(() => {
        if (isSignedIn) {
            router.push('/app');
        }
    }, [isSignedIn, router]);

    if (!isSignedIn) {
        return (
            <Stack
                sx={{ minHeight: '400px' }}
            // direction="row"
            // justifyContent="center"
            // alignItems="center"
            // spacing={2}
            >
                <Typography
                    variant='h3'
                    color={theme.palette.getContrastText(theme.palette.primary.main)}
                >Log in here:
                </Typography>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </Stack>
        );
    }
    return (
        <Stack>
            {/* <Typography variant='h3'>Welcome!</Typography> */}
            {/* <p>Welcome {firebase.auth().currentUser?.displayName ? firebase.auth().currentUser?.displayName : 'Person-who-should-not-be-logged-in'}! You are now signed-in!</p> */}
            {/* <button onClick={handleGetAuth}>Get auth</button> */}
            {/* <button onClick={signOut}>Sign-out</button> */}
        </Stack>
    );
}