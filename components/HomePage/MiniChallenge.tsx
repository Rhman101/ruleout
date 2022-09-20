import { useEffect, useRef, useState } from "react";
import { Challenge } from "../../constants/gradeTopicChallengesInterface";
import dynamic from "next/dynamic";
import { QuestionGenerator } from './../../constants/questionGenerator/questionGeneratorInterface';
import Button from '@mui/material/Button';
import Link from "next/link";

interface SettingProps {
    gradeString: string
    challenge: Challenge
}

const Answer = dynamic(
    () => import('../../components/Answer'),
    { ssr: false }
)

const Question = dynamic(
    () => import('../../components/Question'),
    { ssr: false }
)

const MiniChallenge: React.FC<SettingProps> = (props: SettingProps) => {
    const grade = props.gradeString;
    const challenge = props.challenge;

    const [correct, setCorrect] = useState(0);
    const [firstAttempt, setFirstAttempt] = useState(true);
    const [loaded, setLoaded] = useState(false);

    const questionGenerator = useRef((arg: any) => {
        return { question: [{ latex: false, text: '' }], answer: [''] }
    })
    const [question, setQuestion] = useState<QuestionGenerator>({ question: [{ latex: false, text: '' }], answer: ['_'] });

    useEffect(() => {
        (async () => {
            const { default: gen } = await import(`../../constants/questionGenerator/${challenge.generatorName}`);
            questionGenerator.current = gen;
            setQuestion(questionGenerator.current(challenge.args));
            setLoaded(true);
            setCorrect(0);
        })()

    }, [challenge]);

    const generateQuestion = () => {
        setQuestion(questionGenerator.current(challenge.args));
    }

    const submitAnswer = (answer: string) => {
        if (question.answer.findIndex((elem) => elem === answer) !== -1 || answer === 'k') {
            if (firstAttempt) {
                setCorrect(correct + 1);
            } else {
                setFirstAttempt(true);
            }
            generateQuestion()
        } else {
            handleIncorrect();
            if (firstAttempt) {
                setFirstAttempt(false);
            }
        }
    }

    const [highlightWrong, setHighlightWrong] = useState(false);

    const handleIncorrect = () => {
        setHighlightWrong(true);
        setTimeout(() => setHighlightWrong(false), 300);
    }

    return <>
        {correct < 3 && <>
            <p>Try a question from the {challenge.name} challenge!</p>

            {loaded && <>
                <Question question={question.question}></Question>
                <Answer
                    submitAnswer={(answer: string) => submitAnswer(answer)}
                    highlightWrong={highlightWrong}
                ></Answer>
            </>}
            <p>{grade} questions correct: {correct}.</p>
            <p>Can you reach 3?</p>
            {challenge.settings.instructions && <p><span style={{ fontWeight: 'bolder' }}>FYI: </span>{challenge.settings.instructions}</p>}
        </>}
        {correct > 2 && <>
            <p>{`Too easy for you? For complete, timed, CAPS-aligned challenges, click on the button below!`}</p>
            <Link href={'/app'} passHref><Button>Challenge Accepted!</Button></Link>
        </>
        }
    </>

}

export default MiniChallenge;