import { GradeTopicChallenges } from "./gradeTopicChallengesInterface";

const gradeTopicChallenges: GradeTopicChallenges[] = [
    // {
    //     name: "Grade 1",
    //     topics: []
    // },
    // {
    //     name: "Grade 2",
    //     topics: []
    // },
    // {
    //     name: "Grade 3",
    //     topics: []
    // },
    // {
    //     name: "Grade 4",
    //     topics: []
    // },
    // {
    //     name: "Grade 5",
    //     topics: []
    // },
    // {
    //     name: "Grade 6",
    //     topics: []
    // },
    {
        name: "Grade 7",
        gradeDigit: '7',
        topics: [
            {
                topicName: "Integers",
                challenges: [
                    {
                        name: "Addition",
                        generatorName: 'addIntegers',
                        args: {
                            grade: 7
                        },
                        settings: {
                            secondsStageTwo: 9,
                            secondsStageThree: 7,
                            questionsStageThree: 50,
                            inRowCorrectStageOne: 10,
                            inRowCorrectStageTwo: 15,
                            instructions: ''
                        }
                    },
                    {
                        name: "Subtraction",
                        generatorName: 'subtractIntegers',
                        args: {
                            grade: 7
                        },
                        settings: {
                            secondsStageTwo: 9,
                            secondsStageThree: 7,
                            questionsStageThree: 50,
                            inRowCorrectStageOne: 10,
                            inRowCorrectStageTwo: 15,
                            instructions: ''
                        }
                    },
                    {
                        name: "Multiplication",
                        generatorName: "multiplyIntegers",
                        args: {
                            integerInputs: [2, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 11, 11, 12, 12, 12],
                        },
                        settings: {
                            secondsStageTwo: 9,
                            secondsStageThree: 7,
                            questionsStageThree: 50,
                            inRowCorrectStageOne: 9,
                            inRowCorrectStageTwo: 12,
                            instructions: ''
                        }
                    }, 
                    {
                        name: "Basic Integers",
                        generatorName: "addBasicIntegers",
                        args: {
                            range: [-12, 12],
                            numberIntegers: 2
                        },
                        settings: {
                            secondsStageTwo: 30,
                            secondsStageThree: 20,
                            questionsStageThree: 30,
                            inRowCorrectStageOne: 7,
                            inRowCorrectStageTwo: 10,
                            instructions: ''
                        }
                    }
                ]
            },
            {
                topicName: "Fractions",
                challenges: [
                    {
                        name: "Add Simple Fractions",
                        generatorName: 'addFractions',
                        args: {},
                        settings: {
                            secondsStageTwo: 60,
                            secondsStageThree: 50,
                            questionsStageThree: 30,
                            inRowCorrectStageOne: 7,
                            inRowCorrectStageTwo: 10,
                            instructions: 'To type the mixed number answer, type the number, followed by a space, followed by a fraction delineated with the / key'
                        }
                    },
                    {
                        name: "Subtract Simple Fractions",
                        generatorName: 'subtractFractions',
                        args: {},
                        settings: {
                            secondsStageTwo: 60,
                            secondsStageThree: 50,
                            questionsStageThree: 30,
                            inRowCorrectStageOne: 7,
                            inRowCorrectStageTwo: 10,
                            instructions: 'To type the mixed number answer, type the number, followed by a space, followed by a fraction delineated with the / key'
                        }
                    }, {
                        name: "Multiply Simple Fractions",
                        generatorName: 'multiplyFractions',
                        args: {},
                        settings: {
                            secondsStageTwo: 60,
                            secondsStageThree: 50,
                            questionsStageThree: 30,
                            inRowCorrectStageOne: 7,
                            inRowCorrectStageTwo: 10,
                            instructions: 'To type the mixed number answer, type the number, followed by a space, followed by a fraction delineated with the / key'
                        }
                    }, {
                        name: "Divide Simple Fractions",
                        generatorName: 'divideFractions',
                        args: {},
                        settings: {
                            secondsStageTwo: 60,
                            secondsStageThree: 50,
                            questionsStageThree: 30,
                            inRowCorrectStageOne: 7,
                            inRowCorrectStageTwo: 10,
                            instructions: 'To type the mixed number answer, type the number, followed by a space, followed by a fraction delineated with the / key'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "Grade 8",
        gradeDigit: '8',
        topics: [
            {
                topicName: "Integers",
                challenges: [
                    {
                        name: "Basic Integers",
                        generatorName: "addBasicIntegers",
                        args: {
                            range: [-15, 15],
                            numberIntegers: 3
                        },
                        settings: {
                            secondsStageTwo: 30,
                            secondsStageThree: 20,
                            questionsStageThree: 30,
                            inRowCorrectStageOne: 7,
                            inRowCorrectStageTwo: 10,
                            instructions: ''
                        }
                    },
                    {
                        name: "Multiply Integers",
                        generatorName: "multiplyIntegers",
                        args: {
                            integerInputs: [
                                2, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 11, 11, 12, 12, 12,
                                -2, -3, -4, -4, -5, -5, -6, -6, -6, -7, -7, -7, -8, -8, -8, -9, -9, -9, -10, -11, -11, -12, -12, -12
                            ]
                        },
                        settings: {
                            secondsStageTwo: 8,
                            secondsStageThree: 7,
                            questionsStageThree: 70,
                            inRowCorrectStageOne: 10,
                            inRowCorrectStageTwo: 15,
                            instructions: ''
                        }
                    }
                ]
            },
            {
                topicName: "Algebraic Equations",
                challenges: [
                    {
                        name: "One-step Equations",
                        generatorName: 'oneStepEquations',
                        args: {
                            additionRange: [-15, 15],
                            multiplicationRange: [-15, 15],
                            divisionRange: [-12, 12]
                        },
                        settings: {
                            secondsStageTwo: 25,
                            secondsStageThree: 18,
                            questionsStageThree: 40,
                            inRowCorrectStageOne: 6,
                            inRowCorrectStageTwo: 8,
                            instructions: 'Where a fraction is the answer, leave the answer as an improper fraction.'
                        }
                    },
                ]
            },
            {
                topicName: "Algebraic Expressions",
                challenges: [
                    {
                        name: "Factorize Difference of Squares",
                        generatorName: 'factorizeDiffOfSq',
                        args: {
                            withInteger: false
                        },
                        settings: {
                            secondsStageTwo: 60,
                            secondsStageThree: 50,
                            questionsStageThree: 15,
                            inRowCorrectStageOne: 5,
                            inRowCorrectStageTwo: 8,
                            instructions: ''
                        }
                    }, {
                        name: "Factorize Quadratics",
                        generatorName: 'factorizeQuadratics',
                        args: {
                            leadingCoefficient: false
                        },
                        settings: {
                            secondsStageTwo: 360,
                            secondsStageThree: 240,
                            questionsStageThree: 15,
                            inRowCorrectStageOne: 5,
                            inRowCorrectStageTwo: 7,
                            instructions: 'PS: If the answer is a binomial squared, type the binomail twice. Type (x+1)(x+1) instead of (x+1)^2.'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "Grade 9",
        gradeDigit: '9',
        topics: [
            {
                topicName: "Integers",
                challenges: [
                    {
                        name: "Basic Integers",
                        generatorName: "addBasicIntegers",
                        args: {
                            range: [-15, 15],
                            numberIntegers: 4
                        },
                        settings: {
                            secondsStageTwo: 30,
                            secondsStageThree: 20,
                            questionsStageThree: 30,
                            inRowCorrectStageOne: 7,
                            inRowCorrectStageTwo: 10,
                            instructions: ''
                        }
                    },
                    {
                        name: "Multiply Integers",
                        generatorName: "multiplyIntegers",
                        args: {
                            integerInputs: [
                                2, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 11, 11, 12, 12, 12,
                                -2, -3, -4, -4, -5, -5, -6, -6, -6, -7, -7, -7, -8, -8, -8, -9, -9, -9, -10, -11, -11, -12, -12, -12
                            ]
                        },
                        settings: {
                            secondsStageTwo: 8,
                            secondsStageThree: 7,
                            questionsStageThree: 70,
                            inRowCorrectStageOne: 10,
                            inRowCorrectStageTwo: 15,
                            instructions: ''
                        }
                    }
                ]
            },
            {
                topicName: "Algebraic Expressions",
                challenges: [
                    {
                        name: "Factorize Difference of Squares",
                        generatorName: 'factorizeDiffOfSq',
                        args: {
                            withInteger: true
                        },
                        settings: {
                            secondsStageTwo: 60,
                            secondsStageThree: 50,
                            questionsStageThree: 15,
                            inRowCorrectStageOne: 5,
                            inRowCorrectStageTwo: 8,
                            instructions: ''
                        }
                    }, {
                        name: "Factorize Quadratics",
                        generatorName: 'factorizeQuadratics',
                        args: {
                            leadingCoefficient: true
                        },
                        settings: {
                            secondsStageTwo: 300,
                            secondsStageThree: 270,
                            questionsStageThree: 15,
                            inRowCorrectStageOne: 5,
                            inRowCorrectStageTwo: 7,
                            instructions: 'PS: If the answer is a binomial squared, type the binomail twice. Type (x+1)(x+1) instead of (x+1)^2.'
                        }
                    }
                ]
            },
            {
                topicName: "Algebraic Equations",
                challenges: [
                    {
                        name: "One-step Equations",
                        generatorName: 'oneStepEquations',
                        args: {
                            additionRange: [-15, 15],
                            multiplicationRange: [-15, 15],
                            divisionRange: [-12, 12]
                        },
                        settings: {
                            secondsStageTwo: 20,
                            secondsStageThree: 15,
                            questionsStageThree: 50,
                            inRowCorrectStageOne: 10,
                            inRowCorrectStageTwo: 13,
                            instructions: 'If a fraction is the answer, leave it as an improper fraction'
                        }
                    },
                ]
            }
        ]
    }, {
        name: "Grade 12",
        gradeDigit: '12',
        topics: [
            {
                topicName: "Calculus",
                challenges: [
                    {
                        name: "Basic Power rule",
                        generatorName: 'basicPowerRule',
                        args: {

                        },
                        settings: {
                            secondsStageTwo: 60,
                            secondsStageThree: 50,
                            questionsStageThree: 15,
                            inRowCorrectStageOne: 5,
                            inRowCorrectStageTwo: 8,
                            instructions: ''
                        }
                    }
                ]
            }
        ]
    }

]

export default gradeTopicChallenges;