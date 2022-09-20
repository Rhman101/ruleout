/* eslint-disable react-hooks/exhaustive-deps */
import Box from '@mui/material/Box';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Question } from '../constants/questionGenerator/questionGeneratorInterface';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number, display: number }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress sx={{ height: '10px' }} variant="determinate" value={props.value} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{props.display}</Typography>
            </Box>
        </Box>
    );
}

interface Props {
    seconds: number,
    timeOut: Function,
    question: Question
}

const Timer: React.FC<Props> = (props) => {
    const [secondsLeft, setSecondsLeft] = useState(props.seconds);
    const [timer, setTimer] = useState<NodeJS.Timeout>();

    useEffect(() => {
        setTimer(setTimeout(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000));
    }, []);

    useEffect(() => {
        setTimer(setTimeout(() => {
            if (secondsLeft === 0) {
            } else if (secondsLeft === 1) {
                props.timeOut();
                setSecondsLeft(secondsLeft - 1);
            } else {
                setSecondsLeft(secondsLeft - 1);
            }

        }, 1000))
    }, [secondsLeft]);

    useEffect(() => {
        if (timer) { clearTimeout(timer); }
        setSecondsLeft(props.seconds);
    }, [props.question]);

    useEffect(() => {
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        }
    })
    
    return <>
        <Box sx={{ width: '20%' }}>
            <LinearProgressWithLabel value={secondsLeft / props.seconds * 100} display={secondsLeft} />
        </Box>
    </>

}

export default Timer;