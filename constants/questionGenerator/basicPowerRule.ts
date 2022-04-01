import { randomNumber } from '../library';
import { QuestionGenerator } from './questionGeneratorInterface';

interface arg {
}

const basicPowerRule = (arg: arg): QuestionGenerator => {

    const a = randomNumber(1, 12);
    const b = randomNumber(1, 12);
    const c = randomNumber(1, 12);

    const k = randomNumber(5, 8);
    const f = randomNumber(3, 4);
    const g = randomNumber(1, 3);

    const hasConstant = randomNumber(0, 1);
    let constant;
    if (hasConstant === 1) {
        constant = randomNumber(1, 50);
    }

    const signOne = randomNumber(1, 2) === 1 ? '' : '-';
    const signTwo = randomNumber(1, 2) === 1 ? '+' : '-';
    const signThree = randomNumber(1, 2) === 1 ? '+' : '-';

    const termOneAnswer = `${a * k}x^${k - 1}`;
    const termTwoAnswer = `${b * f}x^${f - 1}`;
    let termThreeAnswer;
    if (g === 1) {
        termThreeAnswer = `${c}`;
    } else if (g === 2) {
        termThreeAnswer = `${c * g}x`;
    } else {
        termThreeAnswer = `${c * g}x^${g - 1}`;
    }

    const powerRuleQuestion = `${signOne}${a > 1 ? a : ''}x^{${k}}${signTwo}${b > 1 ? b : ''}x^{${f}}${signThree}${c > 1 ? c : ''}x${g > 1 ? '^' + g : ''}${hasConstant ? '+ ' + constant : ''}`;

    const formatAQuestion = [{
        latex: true,
        text: `f\\left(x\\right)=${powerRuleQuestion}`
    }, {
        latex: false,
        text: ". Find "
    }, {
        latex: true,
        text: `f'\\left(x\\right).`
    }];

    const formatBQuestion = [{
        latex: true,
        text: `y=${powerRuleQuestion}`
    }, {
        latex: false,
        text: ". Find "
    }, {
        latex: true,
        text: `\\frac{dy}{dx}.`
    }];

    return {
        question: randomNumber(1, 2) === 1 ? formatAQuestion : formatBQuestion,
        answer: [
            `${signOne}${termOneAnswer}${signTwo}${termTwoAnswer}${signThree}${termThreeAnswer}`
        ]
    }
}

export default basicPowerRule;