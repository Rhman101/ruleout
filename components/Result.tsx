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
        router.push(`/grade/${router.query.gradeNum}`);
    }

    return <>
        {didWin && <p>Well done! You complted the challenge!</p>}
        {!didWin && <>
            <p>Your score: {Math.round(correct / attempted * 100)}%</p>
            <p>Required score: 80%</p>
        </>}
        <button onClick={() => restart()}>{didWin ? "Do it again!" : "Try again!"}</button>
        <br />
        <button onClick={() => anotherChallengeRoute()}>Pick another challenge</button>
    </>

}

export default Result;