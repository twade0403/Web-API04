var currentQuestion = 0;
var score = 0;
var c = 60;
var totquestions = questions.length;
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextBtn = document.getElementById("next");
var startBtn = document.getElementById("start");
var subBtn = document.getElementById("submit");
var result = document.getElementById("result");

function loadQuestion (questionIndex){
    document.getElementById("start").disabled = true;
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};
function loadNextQuestion(){
    var userChoice = document.querySelector('input[type=radio]:checked');
    if(!userChoice){
        alert("Please select answer.");
        return;
    }
    var answer = userChoice.value;
    if(questions[currentQuestion].answer === answer){
        score += 1;
    }
    userChoice.checked = false;
    currentQuestion++;
    if (currentQuestion == totquestions){
        startBtn.style.visibility='hidden';
        nextBtn.style.visibility='hidden';
        quizContainer.style.display="none";
        result.style.display="";
        result.textContent = score;
        return;
    }
    loadQuestion(currentQuestion);
}


function calcScore(){
    const newLocal = "result";
   document.getElementById(newLocal).score;
    return;
 }



var myTimer;
function clock() {
    myTimer = setInterval(myClock, 1000);
    function myClock() {
        document.getElementById("timer").innerHTML = c--;
        if (c == 0) {
        clearInterval(myTimer);
       }
    }
}