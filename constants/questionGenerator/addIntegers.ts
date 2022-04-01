import { QuestionGenerator } from './questionGeneratorInterface';

interface arg {
    grade: number
}

const addIntegers = (arg: arg): QuestionGenerator => {
    const { grade } = arg;
    let integerInputs: number[] = [];
    if (grade === 7 || grade === 8) {
        for (let i = 2; i < 26; i++) {
            integerInputs.push(i)
        }
    } 
    
    const x = integerInputs[Math.floor(Math.random() * integerInputs.length)];
    const y = integerInputs[Math.floor(Math.random() * integerInputs.length)];
    const answer = x + y;
    return {
        question: [{
            latex: false,
            text: `${x.toString()} + ${y.toString()}`
        }],
        answer: [`${answer.toString()}`]
    }
}

export default addIntegers;