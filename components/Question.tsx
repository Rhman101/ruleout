import styles from './Question.module.css';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill'
import { Question } from '../constants/questionGenerator/questionGeneratorInterface';

interface Props {
    question: Question
}

const Question: React.FC<Props> = (props) => {
    return <div>
        <div>
            {props.question.map((elem, id) => {
                if (elem.latex) {
                    return <StaticMathField key={id}>{elem.text}</StaticMathField>
                } else {
                    return elem.text
                }
            })}
        </div>
    </div>

}

export default Question;