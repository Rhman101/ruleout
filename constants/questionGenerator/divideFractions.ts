import { HCF, randomNumber } from '../library';
import { QuestionGenerator } from './questionGeneratorInterface';

interface arg {

}

const divideFractions = (arg: arg): QuestionGenerator => {
    // Question: a/b * c/d

    let a = randomNumber(1, 12);
    let b = randomNumber(1, 12);
    let c = randomNumber(1, 12);
    let d = randomNumber(1, 12);

    let numerator = a * c;
    let denominator = b * d;
    
    let int = Math.floor(numerator / denominator);

    numerator = numerator - int * denominator;

    let _hcf = HCF(numerator, denominator);

    while (_hcf > 1) {
        numerator = numerator / _hcf;
        denominator = denominator / _hcf;
        _hcf = HCF(numerator, denominator);
    }
// int > 0 ? `${int}\\ ` : ''
    let answerStringA = '';
    if (int > 0 && numerator === 0) {
        answerStringA = '' + int;
    } else if (int > 0) {
        answerStringA = `${int}\\ `;
    }

    return {
        question: [{
            latex: true,
            text: `\\frac{${a}}{${b}} \\div \\frac{${d}}{${c}}`
        }],
        answer: [`${answerStringA}${numerator === 0 ? '' : `\\frac{${numerator}}{${denominator}}`}`]
    }
}

export default divideFractions;