import { useEffect, useRef, useState } from "react";
import { Args, Settings } from "../constants/gradeTopicChallengesInterface";
// import ProgressBar from '../components/ProgressBar';
import LevelIndicator from '../components/LevelIndicator';
import dynamic from "next/dynamic";
import Score from "./Score";
import Timer from "./Timer";
import Result from "./Result";
import { QuestionGenerator } from './../constants/questionGenerator/questionGeneratorInterface';
// import WelcomeModal from "./HomePage/WelcomeModal";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ProgressBar from "./ProgressBar";
import Typography from "@mui/material/Typography";
// import { UserContext } from "../pages/_app";

interface SettingProps {
    generatorName: string,
    settings: Settings,
    args: Args,
    gradeDigit: string,
    topic: string,
    challengeName: string
}

const Answer = dynamic(
    () => import('../components/Answer'),
    { ssr: false }
)

const Question = dynamic(
    () => import('../components/Question'),
    { ssr: false }

)

const ChallengeUI: React.FC<SettingProps> = (props) => {
    const questionGenerator = useRef((arg: any) => {
        return { question: [{ latex: false, text: '' }], answer: [''] }
    })
    const [question, setQuestion] = useState<QuestionGenerator>({ question: [{ latex: false, text: '' }], answer: ['_'] });

    const [level, setLevel] = useState(1);
    const [useHistory, setUseHistory] = useState(true);
    const [history, setHistory] = useState<number[]>([]);
    const [firstAttempt, setFirstAttempt] = useState(true);
    const [correct, setCorrect] = useState(0);
    const [attempted, setAttempted] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [didWin, setDidWin] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);

    useEffect(() => console.log({ useHistory, history, firstAttempt, correct, attempted, completed, didWin, questionNumber }));

    const createHistory = (stage: number) => {
        let inRowCorrect;
        if (stage === 1) {
            inRowCorrect = props.settings.inRowCorrectStageOne;
        } else {
            inRowCorrect = props.settings.inRowCorrectStageTwo;
        }
        const newHistory: number[] = [];
        for (let i = 0; i < inRowCorrect; i++) {
            newHistory.push(0);
        }
        setHistory(newHistory);
    }

    useEffect(() => {
        createHistory(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.settings.inRowCorrectStageOne]);

    useEffect(() => {
        (async () => {
            if (props.generatorName !== '') {
                const { default: gen } = await import(`../constants/questionGenerator/${props.generatorName}`);
                questionGenerator.current = gen;
                setQuestion(questionGenerator.current(props.args));
            }
        })()
    }, [props.args, props.generatorName]);

    const checkChallengeWinLose = async () => {
        if (correct / attempted * 100 >= 80) {
            setCompleted(true);
            setDidWin(true);
        } else {
            setCompleted(true);
            setDidWin(false);
        }
    }

    const isHistoryAllCorrect = () => {
        return history.findIndex((elem) => elem === 0 || elem === -1) === -1;
    }

    const checkIncreaseLevel = () => {
        if (level === 1) {
            if (isHistoryAllCorrect()) {
                createHistory(2);
                setLevel(2);
            }
        }
        if (level === 2) {
            if (isHistoryAllCorrect()) {
                setUseHistory(false);
                setLevel(3);
                setQuestionNumber(1);
            }
        }
        if (level === 3) {
            if (attempted >= props.settings.questionsStageThree - 1) {
                checkChallengeWinLose();
            }
        }
    }

    const updateTempHistory = (answerCorrect: boolean) => {
        const tempHistory: number[] = history;
        tempHistory.pop();
        tempHistory.unshift(answerCorrect ? 1 : -1);
        setHistory(tempHistory);
    }

    const submitAnswer = (answer: string = '') => {
        // Great for testing and developing questions. 
        // console.log('question answer', {question, answer});
        if (question.answer.findIndex((elem) => elem === answer) !== -1 || answer === 'k') {
            if (firstAttempt) {
                if (level === 1 || level === 2) {
                    updateTempHistory(true);
                } else {
                    setCorrect(correct + 1);
                    setAttempted(attempted + 1);
                }
                if (questionNumber !== props.settings.questionsStageThree) {
                    setQuestionNumber(questionNumber + 1);
                }
                checkIncreaseLevel();
                generateQuestion();
            } else {
                if (questionNumber !== props.settings.questionsStageThree) {
                    setQuestionNumber(questionNumber + 1);
                }
                setFirstAttempt(true);
                generateQuestion();
            }
        } else {
            handleIncorrect();
            if (firstAttempt) {
                if (level === 1 || level === 2) {
                    updateTempHistory(false);
                } else {
                    setAttempted(attempted + 1);
                }
                setFirstAttempt(false);
            }
        }
    }

    const generateQuestion = () => {
        setQuestion(questionGenerator.current(props.args));
    }

    const restart = () => {
        generateQuestion();
        setLevel(1);
        createHistory(1);
        setUseHistory(true);
        setFirstAttempt(true);
        setCorrect(0);
        setAttempted(0);
        setCompleted(false);
        setDidWin(false);
        setQuestionNumber(1);
    }

    const [highlightWrong, setHighlightWrong] = useState(false);

    const handleIncorrect = () => {
        setHighlightWrong(true);
        setTimeout(() => setHighlightWrong(false), 300);
    }

    useEffect(() => document.getElementById('scrollHere')?.scrollIntoView({ behavior: 'smooth' }), []);

    return <Paper elevation={8} sx={{ marginTop: '10px', padding: '30px' }}>
        <Grid container spacing={4}>

            {/* Content on the left. */}
            <Grid item xs={12} sm={6}>
                <LevelIndicator
                    level={level}
                    gradeDigit={props.gradeDigit}
                    topic={props.topic}
                    challenge={props.challengeName}
                ></LevelIndicator>
            </Grid>

            {/* Content on the right. */}
            <Grid item xs={12} sm={6}>
                {useHistory && <ProgressBar history={history}></ProgressBar>}
                {!useHistory && <Score questionNumber={questionNumber} correct={correct} attempted={attempted} questions={props.settings.questionsStageThree}></Score>}
            </Grid>

            {/* Question and Answer Content */}
            <Grid item xs={12}>
                {!completed && <>
                    {level !== 1 && <Timer question={question.question} timeOut={() => submitAnswer()} seconds={level === 2 ? Number(props.settings.secondsStageTwo) : Number(props.settings.secondsStageThree)}></Timer>}
                    <Question question={question.question}></Question>
                    <Answer
                        highlightWrong={highlightWrong}
                        submitAnswer={(answer: string) => submitAnswer(answer)}
                    ></Answer>
                    {props.settings.instructions && <Typography variant="body1" component="div">
                        <span style={{ fontWeight: 'bolder' }}>FYI: </span>{props.settings.instructions}
                    </Typography>}
                </>}
                {completed &&
                    <>
                        <Result
                            didWin={didWin}
                            restart={restart}
                            correct={correct}
                            attempted={attempted}
                            gradeDigit={props.gradeDigit}
                            topicName={props.topic}
                            challengeName={props.challengeName}
                        ></Result>
                    </>}
            </Grid>
        </Grid>
    </Paper>
}

export default ChallengeUI;