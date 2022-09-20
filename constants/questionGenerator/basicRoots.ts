import { randomNumber } from '../library';
import { QuestionGenerator } from './questionGeneratorInterface';

interface arg {
    exponentQuestions: { likelyhood: number, base: number, exponents: number | number[] }[]
}

const basicRoots = (arg: arg): QuestionGenerator => {
    const { exponentQuestions } = arg;
    let likelyhoodSum = exponentQuestions.reduce((previous, currentValue) => previous + currentValue.likelyhood, 0)
    let chosenCount = randomNumber(1, likelyhoodSum);
    let question = exponentQuestions[0];
    for (let elem of exponentQuestions) {
        chosenCount -= elem.likelyhood;
        if (chosenCount < 1) {
            question = elem;
            break;
        }
    }
    const exponent = !Array.isArray(question.exponents) ?
        question.exponents
        :
        question.exponents[randomNumber(0, question.exponents.length - 1)];

    return {
        question: [{
            latex: true,
            text: `\\sqrt[${exponent}]{${Math.pow(question.base, exponent)}}`
        }],
        answer: [`${question.base}`]
    }
}

export default basicRoots;