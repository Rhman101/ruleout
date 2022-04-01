export interface Question extends Array<{
    latex: boolean,
    text: string
}>{};

export interface QuestionGenerator {
    question: Question
    answer: string[]
}
