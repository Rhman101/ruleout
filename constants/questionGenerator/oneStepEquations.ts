import { HCF, randomNumber } from '../library';
import { QuestionGenerator } from './questionGeneratorInterface';

interface arg {
    additionRange: number[],
    multiplicationRange: number[],
    divisionRange: number[]
}

/*IDEAS FOR IMPROVEMENT:
    For all three options below, do what is done in the multiplyIntegers section,
    where an array of numbers are provided, resulting in harder math operations. 
*/

const oneStepEquations = ({ additionRange, multiplicationRange, divisionRange }: arg): QuestionGenerator => {
    const type = ['add', 'multiply', 'divide'];

    const selection = type[randomNumber(0, 2)];

    if (selection === 'add') {
        let a = randomNumber(additionRange[0], additionRange[1]);
        while (a === 0) {
            a = randomNumber(additionRange[0], additionRange[1]);
        }
        let b = randomNumber(additionRange[0], additionRange[1]);
        while (b === 0) {
            b = randomNumber(additionRange[0], additionRange[1]);
        }
        return {
            question: [{
                latex: false,
                text: `Solve for x: `
            }, {
                latex: true,
                text: `x${a > 0 ? '+' : ''}${a}=${b}`
            }],
            answer: [`${b + a * - 1}`]
        }

    } else if (selection === 'multiply') {
        let a = randomNumber(multiplicationRange[0], multiplicationRange[1]);
        while (a === 0) {
            a = randomNumber(multiplicationRange[0], multiplicationRange[1]);
        }
        let b = randomNumber(multiplicationRange[0], multiplicationRange[1]);
        while (b === 0) {
            b = randomNumber(multiplicationRange[0], multiplicationRange[1]);
        }
        let c = a;
        let d = b;
        let isNegative = d / c < 0 ? true : false;
        let answer: string;
        c = Math.abs(c);
        d = Math.abs(d);
        let hcf = HCF(c, d);
        while (hcf > 1) {
            c = c / hcf;
            d = d / hcf;
            hcf = HCF(c, d);
        }
        if (c === 1) {
            answer = `${isNegative ? '-' : ''}${d.toString()}`;
        } else {
            answer = `${isNegative ? '-' : ''}\\frac{${d}}{${c}}`
        }
        return {
            question: [{
                latex: false,
                text: `Solve for x: `
            }, {
                latex: true,
                text: `${a !== 1 ? a : ''}x=${b}`
            }],
            answer: [answer]
        }
    } else if (selection === 'divide') {
        let a = randomNumber(divisionRange[0], divisionRange[1]);
        while (a === 0 || a === 1) {
            a = randomNumber(divisionRange[0], divisionRange[1]);
        }
        let b = randomNumber(divisionRange[0], divisionRange[1]);
        return {
            question: [{
                latex: false,
                text: `Solve for x: `
            }, {
                latex: true,
                text: `\\frac{x}{${a}}=${b}`
            }],
            answer: [(a * b).toString()]
        }
    }
    return {
        question: [{
            latex: false,
            text: ``
        }],
        answer: [``]
    }
}

export default oneStepEquations;