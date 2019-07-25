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
        question: "What is the MINUMUM amount of innings a Major League baseball innings is played?",
        answers: {
            a: "4",
            b: "9",
            c: "11",
            d: "7"
        },
        correctAnswer: "b"
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

let count = 60;
let intervalId;
let correct = 0;
let incorrect = 0;
let unanswered = 0;

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


$("#submit").on("click", function () {
    stop();
    $("input[type= 'radio']:checked").each(function () {
        var value = $(this).val();
        var index = $(this).attr("name");
        if(myQuestions[index].correctAnswer === value){
            correct++;
        } else if (myQuestions[index].correctAnswer !== value) {
            incorrect++;
        } else {
            unanswered++;
        }
    });
    $("#correctScreen").text(correct);
    $("#wrongScreen").text(incorrect);
    $("#unanswered").text(unanswered);
})


myQuestions.forEach(buildQuestion);

