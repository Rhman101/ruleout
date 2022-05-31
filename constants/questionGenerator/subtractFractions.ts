import { HCF, randomNumber } from '../library';
import { QuestionGenerator } from './questionGeneratorInterface';

interface arg {

}

const subtractFraction = (arg: arg): QuestionGenerator => {
    const w = randomNumber(1, 10);
    const x = randomNumber(w + 1, 12);
    const y = randomNumber(1, 10);
    const z = randomNumber(y + 1, 12);
    let a, b, c, d;

    if (w * z / x * z > y * x / x * z) {
        a = w;
        b = x;
        c = y;
        d = z;
    } else {
        a = y;
        b = z;
        c = w;
        d = x;
    }

    let numerator = a * d - c * b;
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
            text: `\\frac{${a}}{${b}}-\\frac{${c}}{${d}}`
        }],
        answer: [`${wholeNr ? `${wholeNr}\\ ` : ''}\\frac{${numerator}}{${denominator}}`]
    }
}

export default subtractFraction;