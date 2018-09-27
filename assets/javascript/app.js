var theMostImportantVariable = true;
// var moveLeftPlease = alert(theMostImportantVariable)

var questionOne = {
    content: "What year was Dungeons & Dragons created?",
    answer: "1974",
    trapOne: "1997",
    trapTwo: "1984",
    trapThree: "1970",
    img: "assets/images/olddnd.jpg"
}
var questionTwo = {
    content: "What is the name of the creator of Dungeons & Dragons?",
    answer: "Gary Gygax",
    trapOne: "Matthew Mercer",
    trapTwo: "Wizards of the Coast",
    trapThree: "Tactical Studies Rules",
    img: "assets/images/Gary-Gygax.jpg"
}
var questionThree = {
    content: "Which edition of Dungeons & Dragons first used THAC0?",
    answer: "Advanced Dungeons & Dragons",
    trapOne: "Dungeons & Dragons 3.5",
    trapTwo: "Dungeons & Dragons 5e",
    trapThree: "Original Dungeons & Dragons",
    img: "assets/images/thac0.jpg"
}
var questionFour = {
    content: "What is the name of the game that rivaled D&D 4th edition?",
    answer: "Pathfinder",
    trapOne: "Better Dungeons & Dragons",
    trapTwo: "Mutants & Masterminds",
    trapThree: "Shadowrun",
    img: "assets/images/pathfinder.png"
}
var questionFive = {
    content: "What is the name of the most legendary monster in Dungeons & Dragons?",
    answer: "Tarrasque",
    trapOne: "Beholder",
    trapTwo: "Lich",
    trapThree: "Mind Flayer",
    img: "assets/images/Tarrasque.jpg"
}
var questionsAnswered = 0;
var answeredCorrect = 0;
var answeredWrong = 0;
var didntAnswer = 0;
var time = 30;
var intervalID
var count = function () {
    time--
    $(".time").text("Time Remaining: " + time)
    if (time <= 0) {
        clearInterval(intervalID)
        if (questionsAnswered === 0) {
            return wrongAnswer(questionOne)
        }
        else if (questionsAnswered === 1) {
            return wrongAnswer(questionTwo)
        }
        else if (questionsAnswered === 2) {
            return wrongAnswer(questionThree)
        }
        else if (questionsAnswered === 3) {
            return wrongAnswer(questionFour)
        }
        else if (questionsAnswered === 4) {
            return wrongAnswer(questionFive)
        }
    }
}
var nextQuestion = function () {
    $("#answerDiv").show()
    $("#displayDiv").hide()
    time = 30
    intervalID = setInterval(count, 1000)
    if (questionsAnswered === 0) {
        $(".question").text(questionOne.content)
        $("#answerA").text(questionOne.trapOne)
        $("#answerB").text(questionOne.answer)
        $("#answerC").text(questionOne.trapTwo)
        $("#answerD").text(questionOne.trapThree)
    }
    else if (questionsAnswered === 1) {
        $(".question").text(questionTwo.content)
        $("#answerA").text(questionTwo.trapTwo)
        $("#answerB").text(questionTwo.trapThree)
        $("#answerC").text(questionTwo.trapOne)
        $("#answerD").text(questionTwo.answer)
    }
    else if (questionsAnswered === 2) {
        $(".question").text(questionThree.content)
        $("#answerA").text(questionThree.trapThree)
        $("#answerB").text(questionThree.trapTwo)
        $("#answerC").text(questionThree.answer)
        $("#answerD").text(questionThree.trapOne)
    }
    else if (questionsAnswered === 3) {
        $(".question").text(questionFour.content)
        $("#answerA").text(questionFour.answer)
        $("#answerB").text(questionFour.trapTwo)
        $("#answerC").text(questionFour.trapThree)
        $("#answerD").text(questionFour.trapOne)
    }
    else if (questionsAnswered === 4) {
        $(".question").text(questionFive.content)
        $("#answerA").text(questionFive.trapOne)
        $("#answerB").text(questionFive.trapTwo)
        $("#answerC").text(questionFive.answer)
        $("#answerD").text(questionFive.trapThree)
    }
    else if (questionsAnswered === 5) {
        $(".question").text("You Defeated! You got:")
        $("#rightWrong").text(answeredCorrect + " Answers Right!")
        $("#justWrong").text(answeredWrong + " Answers Wrong!")
        $("#what").text(didntAnswer + " Unanswered.")
        $("#start").text("Start Over?").show();
        clearInterval(intervalID)
        $("#answerDiv").hide()
        $("#displayDiv").show()
        $("#pic").hide()
    }
}
var correctAnswer = function (q) {
    questionsAnswered++
    answeredCorrect++
    $(".question").text("Correct!")
    clearInterval(intervalID)
    $("#answerDiv").hide()
    $("#rightWrong").text("")
    $("#pic").attr("src", q.img)
    $("#pic").show()
    $("#displayDiv").show()
    setTimeout(nextQuestion, 3000)
}
var wrongAnswer = function (of) {
    questionsAnswered++
    if (time <= 0) {
        $(".question").text("Time's Up!")
        didntAnswer++
    }
    else {
        $(".question").text("Wrong!")
        answeredWrong++
    }
    clearInterval(intervalID)
    $("#answerDiv").hide()
    $("#rightWrong").text("The Correct Answer was: " + of.answer)
    $("#pic").attr("src", of.img)
    $("#pic").show()
    $("#displayDiv").show()
    setTimeout(nextQuestion, 3000)
}
$("#start").on("click", function () {
    questionsAnswered = 0
    answeredCorrect = 0
    answeredWrong = 0
    didntAnswer = 0
    $("#justWrong").text("")
    $("#what").text("")
    $(".time").text("Time Remaining: " + time)
    $("#start").hide()
    nextQuestion()
    
})
$("#answerA").on("click", function () {
    if (questionsAnswered === 0) {
        return wrongAnswer(questionOne)
    }
    else if (questionsAnswered === 1) {
        return wrongAnswer(questionTwo)
    }
    else if (questionsAnswered === 2) {
        return wrongAnswer(questionThree)
    }
    else if (questionsAnswered === 3) {
        return correctAnswer(questionFour)
    }
    else if (questionsAnswered === 4) {
        return wrongAnswer(questionFive)
    }
})
$("#answerB").on("click", function () {
    if (questionsAnswered === 0) {
        return correctAnswer(questionOne)
    }
    else if (questionsAnswered === 1) {
        return wrongAnswer(questionTwo)
    }
    else if (questionsAnswered === 2) {
        return wrongAnswer(questionThree)
    }
    else if (questionsAnswered === 3) {
        return wrongAnswer(questionFour)
    }
    else if (questionsAnswered === 4) {
        return wrongAnswer(questionFive)
    }
})
$("#answerC").on("click", function () {
    if (questionsAnswered === 0) {
        return wrongAnswer(questionOne)
    }
    else if (questionsAnswered === 1) {
        return wrongAnswer(questionTwo)
    }
    else if (questionsAnswered === 2) {
        return correctAnswer(questionThree)
    }
    else if (questionsAnswered === 3) {
        return wrongAnswer(questionFour)
    }
    else if (questionsAnswered === 4) {
        return correctAnswer(questionFive)
    }
})
$("#answerD").on("click", function () {
    if (questionsAnswered === 0) {
        return wrongAnswer(questionOne)
    }
    else if (questionsAnswered === 1) {
        return correctAnswer(questionTwo)
    }
    else if (questionsAnswered === 2) {
        return wrongAnswer(questionThree)
    }
    else if (questionsAnswered === 3) {
        return wrongAnswer(questionFour)
    }
    else if (questionsAnswered === 4) {
        return wrongAnswer(questionFive)
    }
})