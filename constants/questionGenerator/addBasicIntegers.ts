import { randomNumber } from '../library';
import { QuestionGenerator } from './questionGeneratorInterface';

interface arg {
    range: number[],
    numberIntegers: number
}

const addIntegersBasic = ({ range, numberIntegers }: arg): QuestionGenerator => {
    const integers = [];
    let question = '';
    let answer = 0;
    let placeHolder;
    for (let i = 0; i < numberIntegers; i++) {
        placeHolder = randomNumber(range[0], range[1]);
        while (placeHolder === 0) {
            placeHolder = randomNumber(range[0], range[1]);
        }
        if (integers.length === 0) {
            question += placeHolder.toString()
        } else {
            question += `${placeHolder > 0 ? '+' : ''}${placeHolder.toString()}`;
        }
        integers.push(placeHolder);
        answer += placeHolder;
    }
    return {
        question: [{
            latex: false,
            text: question
        }],
        answer: [answer.toString()]
    }
}

export default addIntegersBasic;