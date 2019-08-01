// array of objects
const myQuestions = [
    {
        question: "Which of these team is NOT in the National League West?",
        answers: {
            a: "San Fransico Giants",
            b: "Arizona Diamondbacks",
            c: "San Diego Padres",
            d: "New York Yankees"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of these players DID NOT play for the Arizona Diamondbacks?",
        answers: {
            a: "Luis Gonzalez",
            b: "Randy Johnson",
            c: "Mike Trout",
            d: "Craig Counsel"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the MINUMUM amount of innings a Major League baseball is played?",
        answers: {
            a: "4",
            b: "9",
            c: "11",
            d: "7"
        },
        correctAnswer: "b"
    },
    {
        question: "How far away is the pitcher's mound to home plate?",
        answers: {
            a: "60ft 6in",
            b: "55ft",
            c: "49ft 5in",
            d: "65ft 4in"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the longest official homerun ever hit?",
        answers: {
            a: "600ft",
            b: "525ft",
            c: "575ft",
            d: "550ft"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the Arizona Diamondbacks Mascot's name?",
        answers: {
            a: "Howler",
            b: "Mr. Met",
            c: "Baxter",
            d: "Lou Seal"
        },
        correctAnswer: "c"
    },
    {
        question: "Which franchise has the most Hall of Fame Players?",
        answers: {
            a: "New York Yankees, 23",
            b: "San Francisco Giants, 17",
            c: "Los Angeles Dodgers, 15",
            d: "Cleveland Indians, 13"
        },
        correctAnswer: "a"
    },
    {
        question: "Which player was nicknamed Mr. November?",
        answers: {
            a: "David Ortiz",
            b: "Mariano Rivera",
            c: "Reggie Jackson",
            d: "Derek Jeter"
        },
        correctAnswer: "d"
    },
    {
        question: "Which player won the 2019 Home Run Derby?",
        answers: {
            a: "Vladimir Guerro Jr.",
            b: "Peter Alonso",
            c: "Joc Pederson",
            d: "Ronald Acuna Jr."
        },
        correctAnswer: "b"
    },
    {
        question: "What shape is a baseball field commonly referred to as?",
        answers: {
            a: "Diamond",
            b: "Box",
            c: "Octagon",
            d: "Circle"
        },
        correctAnswer: "a"
    }
]

let count = 120;
let intervalId;
let correct = 0;
let incorrect = 0;


function updateScore() {
    $("#correctScreen").text(correct);
    $("#wrongScreen").text(incorrect);
};

function calculateScore() {
    $("input[type= 'radio']:checked").each(function () {
        var value = $(this).val();
        var index = $(this).attr("name");
        if(myQuestions[index].correctAnswer === value){
            correct++;
        } else {
            incorrect++;
        }
    });
};

function stop() {
    clearInterval(intervalId);
    $("#timer").hide();
    $("#quiz").hide();
    $("#submit").hide();
    $("#details").show();
};

function countDown() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    function decrement() {

        count--;

        $("#timer").html("<h2>" + count + "</h2>");

        if (count <= 0) {
            stop();
            alert("TIMES UP!");
            calculateScore();
            updateScore();
        }
    }
};

$("#details").hide();

countDown();

function buildQuestion(question, index) {
    var $quiz = $("#quiz");
    var $questionContainer = $("<div class='question-container'>").attr("data-index", index);
    var $question = $("<h3>").text(question.question);


    $questionContainer.append($question)
    for (var key in question.answers) {
        var $formCheck = $("<div class='form-check form-check-inline'>");
        var $input = $("<input class='form-check-input' type='radio'>").val(key);
        $input.attr("name", index);
        var $label = $("<label class='form-check-label'>").text(question.answers[key]);
        $formCheck.append($input, $label);
        $questionContainer.append($formCheck)
    }
    $quiz.append($questionContainer);
}

myQuestions.forEach(buildQuestion);

$("#submit").on("click", function () {
    stop();
    calculateScore();
    updateScore();
})



