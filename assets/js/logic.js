// variables to keep track of time 
var questionsIndex = 0;
// needs to start at o so the timer starts at o instead of 1 
var time = questions.length * 15;
// allows you to track the time played and keep score of the quiz at play 
var timerId; 

// variables to control the Dom 
var questionsE1 = document.getElementById("quentions");

vartimerEl = document.getElementById("time");

var choicesEl = document.getElementById("choices");

varsibmitBtn = document.getElementById("submit");

var startBtn = document.getElementById("start");

var initialsEl = document.getElementById("initals");

var feedbackEl = document.getElementById("feedback")

// var imgEl = document.getElementById(".img");

// questions asked during the quiz 
var questions =[
{
    title: "Which years was the Porsche 959 supercar available for sale",
    choices:[ "1985-1992", "1986-1989", "1987-1988", "1985-1990"],
    answer: "1986-1989"
    
    
},
{
    title: "Which supercar has 4 doors?",
    choices:[ "Ferrari FF", "Auston Martin Rapide", "Bentley Continental GT Speed", "Lotus Evora S"],
    answer: "Auston Martin Rapide"

},


{
    title: "How much horsepower does a 2012 Lamborghini Aventador have?",
    choices:[ "800", "700", "500", "600"],
    answer: "700"

},

{
    title: "Which supercar has the quickest 0-60 time?",
    choices:[ "1994 Bugatti EB110 GT", "2009 Ariel Atom 3", "2011 Chevrolet Corvette ZR1 ", "2012 Audi R8 GT"],
    answer: "2009 Ariel Atom 3"

},
{
    title: "What is the Ferrari Enzo is named after?",
    choices:[ "The car's designer", "The Italian town where the founder first raced", "The Ferrari providing grounds(race track)", "The founder of Ferrari"],
    answer: "The founder of Ferrari"

},


];

//start quiz function 
function beginQuiz () {
    //hide the start screen during the quiz 
 var startquizEl = document.getElementById("startquiz");
 startScreenEl.setAttribute("class","hide");

 // make questions appear on the screen to being quiz 
 questionsEl.removeattribute("class");
  // start the timer 
  // show starting time on the page
  getQuestions();

}

// Get Quiz questions 
 function getQuestions() {
// create a variable to acess the current list of questions 
var currentQuestions = questions[questionsIndex];

// update code question title with current code 

// clear old question choices 

// loop over the choices by using forEach

// attach click event to listener 

// display the choice on the page 

}

// question button clicks
function clickQuestions () {
// error handling needed for incorrect answer to question 

// And add the time deduction 

// display the new time once the time is deducted 

// flash the wrong/right feedback on the page under the questions 

// move to the next question 

// check if we've finished asking all the questions
}

// End the quiz 
function endtheQuiz(){
// stop the timer 
clearInterval(timerId);

// show final screen 
// show final score 
// hide questions 
}

// timer function 
function clockCountDown () {
// update the time
time--;
timerEl.textContent = time;
// check if the user is out of time 
if (time<= 0) {
    endTheQuiz ();
    }
}
// save the users score 
function saveHighscores(){
// get value from your input box 

// make sure the user wrote their initials in the box 

// local storage 

// redirect to the next page (highscore.html)
}
// Key event functions 
function enterBtnEvent (){

}

// user clicks button to submit their initials
submitBtn.onclick = saveHighScores;
// user clicks to begin the quiz
startBtn.onclick = beginQuiz;
// this checks if the user hit enter for their initials
initialsEl.onkeyup = enterBtnEvent;