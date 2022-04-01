import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { addStyles, EditableMathField } from 'react-mathquill'
import style from './Answer.module.css';

addStyles();

interface Props {
    submitAnswer: Function
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

    return <div>
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
        // mathquillDidMount={() => console.log('mounted')}
        />
        <br />
        <Button onClick={() => submitAnswer()}
        >Submit</Button>
        {!pressedEnter && <p>{"PS: Press \"enter\" to submit your answer!"}</p>}
    </div>

}

export default Question;