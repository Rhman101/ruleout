/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Question } from '../constants/questionGenerator/questionGeneratorInterface';
import styles from './Timer.module.css';

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
    return <div>
        <p className={styles.TimerText}>{secondsLeft}</p>
    </div>

}

export default Timer;