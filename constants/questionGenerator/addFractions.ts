import { HCF, randomNumber } from '../library';
import { QuestionGenerator } from './questionGeneratorInterface';

interface arg {

}

const addFractions = (arg: arg): QuestionGenerator => {
    const a = randomNumber(1, 12);
    const b = randomNumber(1, 12);
    const c = randomNumber(1, 12);
    const d = randomNumber(1, 12);

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