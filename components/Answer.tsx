import { useEffect, useRef, useState } from 'react';
import { addStyles, EditableMathField } from 'react-mathquill'
import style from './Answer.module.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from "@mui/material/Typography";

addStyles();

interface Props {
    submitAnswer: Function,
    highlightWrong: boolean
}

const Question: React.FC<Props> = (props) => {
    const [answerInput, setAnswerInput] = useState('');
    const [pressedEnter, setPressEnter] = useState(false);

    const writeAnswer = (answerText: string) => {
        setAnswerInput(answerText);
    }

    useEffect(() => {
        const x = document.getElementById('mathField')?.children[0]?.children[0] as HTMLTextAreaElement;
        x.select();
        x.focus();
    });

    const submitAnswer = () => {
        props.submitAnswer(answerInput);
        setAnswerInput('');
    }

    return <>
        <EditableMathField
            className={style.questionInput}
            id={"mathField"}
            latex={answerInput}
            onChange={(mathField) => {
                writeAnswer(mathField.latex());
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    setPressEnter(true);
                    submitAnswer();
                }
            }}
        />
        <br />
        <Button variant="contained" color="secondary" endIcon={<SendIcon />} onClick={() => submitAnswer()} >
            Submit
        </Button>
        {!pressedEnter && <Typography variant="body1" component="div">{"PS: Press \"enter\" to submit your answer!"}</Typography>}
    </>
}

export default Question;