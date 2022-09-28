import { QuestionGenerator } from './questionGeneratorInterface';

interface arg {
    integerInputs: number[]
}

const multiplyIntegers = (arg: arg): QuestionGenerator => {
    const { integerInputs } = arg;
    
    const x = integerInputs[Math.floor(Math.random() * integerInputs.length)];
    const y = integerInputs[Math.floor(Math.random() * integerInputs.length)];
    return {
        question: [{
            latex: false,
            text: `${x * y} ÷ ${x} = `
        }],
        answer: [`${y}`]
    }
}

export default multiplyIntegers;