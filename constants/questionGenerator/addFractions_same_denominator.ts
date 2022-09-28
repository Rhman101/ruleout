import { HCF, randomNumber } from '../library';
import { QuestionGenerator } from './questionGeneratorInterface';

interface arg { }

const addFractions = (arg: arg): QuestionGenerator => {
    const numeratorA = randomNumber(1, 10);
    const numeratorB = randomNumber(1, 10);
    let denominator = randomNumber(Math.max(numeratorA, numeratorB), 12);
    console.log({ numeratorA, numeratorB, denominator })

    let wholeNr;
    let answerNumerator;

    if (numeratorA + numeratorB >= denominator) {
        wholeNr = Math.floor((numeratorA + numeratorB) / denominator);
        answerNumerator = (numeratorA + numeratorB) - wholeNr * denominator;
    } else {
        answerNumerator = numeratorA + numeratorB
    }

    let hcf = HCF(answerNumerator, denominator);

    while (hcf > 1) {
        if (Math.floor(answerNumerator / hcf) === answerNumerator / hcf) {
            answerNumerator = answerNumerator / hcf;
        } else {
            break;
        }
        if (Math.floor(denominator / hcf) === denominator / hcf) {
            denominator = denominator / hcf;
        } else {
            break;
        }
        hcf = HCF(answerNumerator, denominator);
    }


    return {
        question: [{
            latex: true,
            text: `\\frac{${numeratorA}}{${denominator}}+\\frac{${numeratorB}}{${denominator}}`
        }],
        answer: [`${wholeNr ? `${wholeNr}` : ''}${answerNumerator !== 0 ? `\\ \\frac{${answerNumerator}}{${denominator}}` : ''}`]
    }
}

export default addFractions;