import { useEffect, useRef, useState } from "react";
import { Args, Challenge, Settings } from "../../constants/gradeTopicChallengesInterface";
import ProgressBar from '../../components/ProgressBar';
import LevelIndicator from '../../components/LevelIndicator';
import dynamic from "next/dynamic";
import styles from './MiniChallengeUI.module.css';
import Score from "./../Score";
import Timer from "./../Timer";
import { useRouter } from 'next/router';
import Result from "./../Result";
import { QuestionGenerator } from './../../constants/questionGenerator/questionGeneratorInterface';
import gradeTopicChallenges from './../../constants/gradeTopicChallenges';
import { randomNumber } from "../../constants/library";
import { Button } from "react-bootstrap";
import Link from "next/link";
import WelcomeModal from "./WelcomeModal";

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

const MiniChallengeUI: React.FC<SettingProps> = (props: SettingProps) => {
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
            if (firstAttempt) {
                setFirstAttempt(false);
            }
        }
    }

    return <>
        {correct < 3 && <>
            <p>Try a question from the {challenge.name} challenge!</p>
            {loaded && <>
                <Question question={question.question}></Question>
                <Answer
                    submitAnswer={(answer: string) => submitAnswer(answer)}
                ></Answer>
            </>}
            <p>{grade} questions correct: {correct}.</p>
            <p>Can you reach 3?</p>
        </>}
        {correct > 2 && <>
            <p>{`Too easy for you? For complete, timed, CAPS-aligned challenges, click on the button below!`}</p>
            <Link href={'/challenges'} passHref><Button>Challenge Accepted!</Button></Link>
            <WelcomeModal></WelcomeModal>
        </>
        }
    </>

}

export default MiniChallengeUI;