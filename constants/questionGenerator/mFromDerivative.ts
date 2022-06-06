import { randomNumber } from '../library';
import { QuestionGenerator } from './questionGeneratorInterface';

interface arg {
}

const mFromDerivative = (arg: arg): QuestionGenerator => {

    let a = randomNumber(2, 8);
    a = randomNumber(0, 1) === 1 ? a : a * -1;
    let b = randomNumber(2, 4);
    let c = randomNumber(1, 12);
    c = randomNumber(0, 1) === 1 ? c : c * -1;

    let d = randomNumber(1, 3);
    d = randomNumber(0, 1) === 1 ? d : d * -1;

    let m = a * b;
    
    for (let i = 0; i < b - 1; i++) {
        m = m * d;
    }
    let questionTextA = 'Determine the slope of the function at ';
    let questionTextB = 'Find the gradient of the tangent line at ';

    return {
        question: [{
            latex: true,
            text: `f(x)=${a}x^${b}${c > 0 ? '+' : ''}${c}.`
        }, {
            latex: false,
            text: randomNumber(0,1) === 1 ? questionTextA : questionTextB
        }, {
            latex: true,
            text: `x = ${d}.`
        }],
        answer: [`${m}`]
    }
}

export default mFromDerivative;