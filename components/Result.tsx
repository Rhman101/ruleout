import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

interface Props {
    didWin: boolean,
    correct: number,
    attempted: number
    restart: Function
}

const Result: React.FC<Props> = ({ didWin, correct, attempted, restart }) => {
    const router = useRouter();

    const anotherChallengeRoute = () => {
        router.push(`/grade/${router.query.gradeDigit}`);
    }

    return <>
        {didWin && <p>Well done! You complted the challenge!</p>}
        {!didWin && <>
            <p>Your score: {Math.round(correct / attempted * 100)}%</p>
            <p>Required score: 80%</p>
        </>}
        {!didWin && <Button variant='contained' sx={{margin: '5px'}} onClick={() => restart()}>Try Again!</Button>}
        <Button variant='contained' sx={{margin: '5px'}} onClick={() => anotherChallengeRoute()}>Pick another challenge</Button>
    </>

}

export default Result;