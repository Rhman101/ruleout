import { QuestionGenerator } from './questionGeneratorInterface';

interface arg {
    grade: number
}

const addIntegers = (arg: arg): QuestionGenerator => {
    const { grade } = arg;
    let integerInputs: number[] = [];
    if (grade === 5) {
        for (let i = 2; i < 15; i++) {
            integerInputs.push(i)
        }
    }
    if (grade === 7 || grade === 8) {
        for (let i = 2; i < 26; i++) {
            integerInputs.push(i)
        }
    }

    const x = integerInputs[Math.floor(Math.random() * integerInputs.length)];
    const y = integerInputs[Math.floor(Math.random() * integerInputs.length)];
    return {
        question: [{
            latex: false,
            text: `${(x + y).toString()} - ${y.toString()}`
        }],
        answer: [`${x.toString()}`]
    }
}

export default addIntegers;