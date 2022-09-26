import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import useIsSignedIn from './hooks/useIsSignedIn';
import { getAuth } from 'firebase/auth';
import { Typography } from '@mui/material';

interface Props {
    didWin: boolean;
    correct: number;
    attempted: number;
    restart: Function;
    gradeDigit: string;
    topicName: string;
    challengeName: string;
}

const Result: React.FC<Props> = ({ didWin, correct, attempted, restart, gradeDigit, topicName, challengeName }) => {
    const [isSignedIn, , db] = useIsSignedIn();
    const router = useRouter();
    const [showAlert, setShowAlert] = useState(false);
    const [alertStatus, setAlertStatus] = useState<'error' | 'info' | 'success'>('info');
    useEffect(() => {
        (async () => {
            if (isSignedIn) {
                try {
                    const auth = getAuth();
                    await addDoc(collection(db, 'completed_challenges'), {
                        displayName: auth.currentUser?.displayName,
                        email: auth.currentUser?.email,
                        successful: didWin ? true : false,
                        attempted,
                        correct,
                        gradeDigit,
                        topicName,
                        challengeName,
                        completed: true,
                        created: Timestamp.now()
                    })
                    setAlertStatus(didWin ? 'success' : 'info');
                    setShowAlert(true);
                } catch (e) {
                    console.log('Error', e);
                    setAlertStatus('error');
                    setShowAlert(true);
                }
            }
        })()
    }, [attempted, challengeName, correct, db, didWin, gradeDigit, isSignedIn, topicName])


    const anotherChallengeRoute = () => {
        router.push(`/app/grade/${gradeDigit}`);
    }

    return <>
        {didWin && <Typography variant='h6'>Well done! You complted the challenge!</Typography>}
        {!didWin && <>
            <p>Your score: {Math.round(correct / attempted * 100)}%</p>
            <p>Required score: 80%</p>
        </>}
        {showAlert && <Alert severity={alertStatus}>{alertStatus === 'error' ? "Error: Check internet connection" : "Progress Updated."}</Alert>}
        {!didWin && <Button variant='contained' sx={{ margin: '5px' }} onClick={() => restart()}>Try Again!</Button>}
        <Button variant='contained' sx={{ margin: '5px' }} onClick={() => anotherChallengeRoute()}>Pick another challenge</Button>
    </>
}

export default Result;