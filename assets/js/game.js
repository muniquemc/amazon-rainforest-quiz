const question = document.querySelector('#question');
const choices = Arrayfrom(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('score');
const progressBarFull = document.querySelector('progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestion = []

let questions = [
    {
        question: 'In which countries of South America the Amazon rainforest is found?',
        choice1: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Argentina',
        choice2: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Uruguay and French Guiana',
        choice3: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Suriname and French Guiana',
        choice4: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Paraguay',
        answer: 2,
    },
    {
        question: 'In which countries of South America the Amazon rainforest is found?',
        choice1: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Argentina',
        choice2: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Uruguay and French Guiana',
        choice3: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Suriname and French Guiana',
        choice4: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Paraguay',
        answer: 2,
    },
    {
        question: 'In which countries of South America the Amazon rainforest is found?',
        choice1: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Argentina',
        choice2: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Uruguay and French Guiana',
        choice3: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Suriname and French Guiana',
        choice4: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Paraguay',
        answer: 2,
    },
    {
        question: 'In which countries of South America the Amazon rainforest is found?',
        choice1: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Argentina',
        choice2: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Uruguay and French Guiana',
        choice3: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Suriname and French Guiana',
        choice4: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Paraguay',
        answer: 2,
    },
    {
        question: 'In which countries of South America the Amazon rainforest is found?',
        choice1: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Argentina',
        choice2: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Uruguay and French Guiana',
        choice3: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Suriname and French Guiana',
        choice4: 'Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Paraguay',
        answer: 2,
    },
]