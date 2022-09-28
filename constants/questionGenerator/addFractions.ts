import { HCF, randomNumber } from '../library';
import { QuestionGenerator } from './questionGeneratorInterface';

interface arg {
    grade?: number
}

const addFractions = (arg: arg): QuestionGenerator => {
    let a;
    let b;
    let c;
    let d;
    if (arg.grade === 5) {
        a = randomNumber(1, 8);
        c = randomNumber(1, 8);
        b = randomNumber(a + 1, 10);
        d = randomNumber(c + 1, 10);
    } else {
        a = randomNumber(1, 10);
        c = randomNumber(1, 10);
        b = randomNumber(a + 1, 12);
        d = randomNumber(c + 1, 12);
    }

    let numerator = a * d + c * b;
    let denominator = b * d;
    let wholeNr;

    if (numerator > denominator) {
        wholeNr = Math.floor(numerator / denominator);
        numerator = numerator - Math.floor(numerator / denominator) * denominator;
    }

    let hcf = HCF(numerator, denominator);

    while (hcf > 1) {
        if (Math.floor(numerator / hcf) === numerator / hcf) {
            numerator = numerator / hcf;
        } else {
            break;
        }
        if (Math.floor(denominator / hcf) === denominator / hcf) {
            denominator = denominator / hcf;
        } else {
            break;
        }
        hcf = HCF(numerator, denominator);
    }

    return {
        question: [{
            latex: true,
            text: `\\frac{${a}}{${b}}+\\frac{${c}}{${d}}`
        }],
        answer: [`${wholeNr ? `${wholeNr}\\ ` : ''}\\frac{${numerator}}{${denominator}}`]
    }
}

export default addFractions;