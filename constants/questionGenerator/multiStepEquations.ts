import { HCF, randomNumber } from '../library';
import { QuestionGenerator } from './questionGeneratorInterface';

interface arg {
    range: number[]
}

/*IDEAS FOR IMPROVEMENT:
    The a and/or b values must possibly be negative to have a negative in the front. 
*/

const oneStepEquations = ({ range }: arg): QuestionGenerator => {
    let a = range.filter((elem) => elem !== 1)[randomNumber(0, range.length - 2)];
    let b = range.filter((elem) => (elem !== a || elem !== 1))[randomNumber(0, range.length - 3)];
    while (b === a) {
        b = range.filter((elem) => (elem !== a || elem !== 1))[randomNumber(0, range.length - 3)];
    }
    a = randomNumber(0, 1) === 1 ? a * -1 : a;
    let c = range[randomNumber(0, range.length - 1)];
    c = randomNumber(0, 1) === 1 ? c * -1 : c;
    let d = range[randomNumber(0, range.length - 1)];
    d = randomNumber(0, 1) === 1 ? d * -1 : d;
    while (d === c) {
        d = range[randomNumber(0, range.length - 1)];
        d = randomNumber(0, 1) === 1 ? d * -1 : d;
    }
    let numerator = b * (d - c);
    let denominator = a
    let answer;
    if (numerator % denominator === 0) {
        answer = (numerator / denominator).toString();
    } else {
        let hcf = HCF(numerator, denominator);
        let count = 0;
        while (hcf !== 1) {
            numerator = numerator / hcf;
            denominator = denominator / hcf;
            hcf = HCF(numerator, denominator);
            count++;
        }
        answer = `${numerator / denominator > 0 ? "" : '-'}\\frac{${Math.abs(numerator)}}{${Math.abs(denominator)}}`
    }

    return {
        question: [{
            latex: true,
            text: `${a > 0 ? '' : '-'}\\frac{${Math.abs(a)}}{${b}}x${c > 0 ? '+' : ''}${c}=${d}`
        },
        ],
        answer: [answer]
    }
}

export default oneStepEquations;