import { HCF, randomNumber, reduceFraction, toMixedNum } from '../library';
import { QuestionGenerator } from './questionGeneratorInterface';

interface arg {
    max: number;
    denCanBeGreaterThanNum: true;
}

const addFractions_same_denominator = ({ max, denCanBeGreaterThanNum }: arg): QuestionGenerator => {
    const numeratorA = randomNumber(1, max);
    const numeratorB = randomNumber(1, max);
    let denominator = 1;
    if (denCanBeGreaterThanNum) {
        denominator = randomNumber(2, max);
    } else {
        denominator = randomNumber(Math.max(numeratorA, numeratorB), max + 2);
    }
    const sumNumerators = numeratorA + numeratorB;


    // Bug: 3/5 + 2/5 yields '' as expected answer.

    // let numeratorA = 2;
    // let numeratorB = 3;

    // let sumNumerators = 5;
    // let denominator = 5;



    let { int, num, den, hasFraction } = toMixedNum(sumNumerators, denominator, true);

    let intString = `${int > 0 ? int : ''}`;

    let fracString = '';
    if (hasFraction) {
        fracString = `${int > 0 ? '\\ ' : ''}\\frac{${num}}{${den}}`
    }

    return {
        question: [{
            latex: true,
            text: `\\frac{${numeratorA}}{${denominator}}+\\frac{${numeratorB}}{${denominator}}`
        }],
        answer: [`${intString}${fracString}`]
    }
}

export default addFractions_same_denominator;