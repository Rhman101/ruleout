import { QuestionGenerator } from './questionGeneratorInterface';
import { randomNumber, HCF } from './../library';

interface arg {
    withInteger: boolean
}

const FactorizeDiffSq = ({ withInteger }: arg): QuestionGenerator => {
    let a;
    if (withInteger) {
        a = randomNumber(1, 4);
    } else {
        a = 1;
    }

    let b;
    let c;

    if (a > 2) {
        b = randomNumber(1, 6);
        c = randomNumber(1, 6);
    } else {
        b = randomNumber(1, 12);
        c = randomNumber(1, 12);
    }

    while (HCF(b * b, c * c) > 1) {
        c = randomNumber(1, 12);
    }

    return {
        question: [{
            latex: false,
            text: `Factorize`
        }, {
            latex: true,
            text: `${a * b * b > 1 ? a * b * b : ''}x^2-${a * c * c}`
        }],
        answer: [
            `${a !== 1 ? a : ''}\\left(${b === 1 ? "" : b}x+${c}\\right)\\left(${b === 1 ? "" : b}x-${c}\\right)`,
            `${a !== 1 ? a : ''}\\left(${b === 1 ? "" : b}x-${c}\\right)\\left(${b === 1 ? "" : b}x+${c}\\right)`
        ]
    }
}

export default FactorizeDiffSq;