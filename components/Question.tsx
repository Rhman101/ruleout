import styles from './Question.module.css';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill'
import { Question } from '../constants/questionGenerator/questionGeneratorInterface';
import { Typography } from '@mui/material';

interface Props {
    question: Question
}

const Question: React.FC<Props> = (props) => {
    return <div>
        <Typography variant="h6" component="div">
            {props.question.map((elem, id) => {
                if (elem.latex) {
                    return <StaticMathField key={id}>{elem.text}</StaticMathField>
                } else {
                    return <span key={id} style={{ display: "inline", position: "relative", top: 7 }}>{elem.text}</span>
                }
            })}
        </Typography>
    </div>
}

export default Question;