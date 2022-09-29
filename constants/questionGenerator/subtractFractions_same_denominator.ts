import { HCF, randomNumber, reduceFraction, toMixedNum } from '../library';
import { QuestionGenerator } from './questionGeneratorInterface';

interface arg {
    max: number;
    denCanBeGreaterThanNum: true;
}

const subtractFractions_same_denominator = ({ max, denCanBeGreaterThanNum }: arg): QuestionGenerator => {
    let numeratorA = randomNumber(1, max);
    let numeratorB = randomNumber(1, max);
    while (numeratorA === numeratorB) {
        numeratorA = randomNumber(1, max);
        numeratorB = randomNumber(1, max);
    }
    let denominator = 1;
    if (denCanBeGreaterThanNum) {
        denominator = randomNumber(2, max);
    } else {
        denominator = randomNumber(Math.max(numeratorA, numeratorB), max + 2);
    }
    const diffNumerators = Math.max(numeratorA, numeratorB) - Math.min(numeratorA, numeratorB);
   
    let { int, num, den, hasFraction } = toMixedNum(diffNumerators, denominator, true);

    let intString = `${int > 0 ? int : ''}`;

    let fracString = '';
    if (hasFraction) {
        fracString = `${int > 0 ? '\\ ' : ''}\\frac{${num}}{${den}}`
    }

    return {
        question: [{
            latex: true,
            text: `\\frac{${Math.max(numeratorA, numeratorB)}}{${denominator}}-\\frac{${Math.min(numeratorA, numeratorB)}}{${denominator}}`
        }],
        answer: [`${intString}${fracString}`]
    }
}

export default subtractFractions_same_denominator;