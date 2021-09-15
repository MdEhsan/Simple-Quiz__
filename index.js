var readLineSync = require("readline-sync")

var score = 0

var userName = readLineSync.question("Hello! what's your name? ")

console.log("Welcome! " + userName + " Can you answer the below questions " + "while answering the quesiton use lowercase.")



function play(question, answer) {
    var userAnswer = readLineSync.question(question)

    if (userAnswer === answer) {
        console.log("right!")
        score = score + 1

    } else {
        console.log("wrong!")
    }

    console.log("Your Score: ", score)
    console.log("---------")
}


var questions = [{
    question: " Which organ purifies our blood? ",
    answer: "kidney"
}, {
    question: "The animal with a hump on its back is _? ",
    answer: "camel"
}, {
    question: "he brain of a computer is _. ",
    answer: "cpu"
}, {
    question: "Who wrote ‘Ramayana’? ",
    answer: "valmiki"
}, {
    question: "The fastest animal on earth is?",
    answer: "cheetah"
}]

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i]
    play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY🙂 " + "YOUR FINAL SCORE IS: " + score)