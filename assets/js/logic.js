// variables to keep track of time
var questionsIndex = 0;
// needs to start at o so the timer starts at o instead of 1

// allows you to track the time played and keep score of the quiz at play
var timerId;

// variables to control the Dom
var questionsEl = document.getElementById("questions");

var timerEl = document.getElementById("time");

var choicesEl = document.getElementById("choices");

var qTitle = document.getElementById("qTitle");

var submitBtn = document.getElementById("submit");

var startBtn = document.getElementById("start");

var initialsEl = document.getElementById("initials");

var feedbackEl = document.getElementById("feedback");

var finalScreen = document.getElementById("final-screen");

var finalScore = document.getElementById("final-score");

// var imgEl = document.getElementById(".img");

// questions asked during the quiz
var questions = [
  {
    title: "Which years was the Porsche 959 supercar available for sale?",
    choices: ["1985-1992", "1986-1989", "1987-1988", "1985-1990"],
    answer: "1986-1989",
  },
  {
    title: "Which supercar has 4 doors?",
    choices: [
      "Ferrari FF",
      "Auston Martin Rapide",
      "Bentley Continental GT Speed",
      "Lotus Evora S",
    ],
    answer: "Auston Martin Rapide",
  },

  {
    title: "How much horsepower does a 2012 Lamborghini Aventador have?",
    choices: ["800", "700", "500", "600"],
    answer: "700",
  },

  {
    title: "Which supercar has the quickest 0-60 time?",
    choices: [
      "1994 Bugatti EB110 GT",
      "2009 Ariel Atom 3",
      "2011 Chevrolet Corvette ZR1 ",
      "2012 Audi R8 GT",
    ],
    answer: "2009 Ariel Atom 3",
  },
  {
    title: "What is the Ferrari Enzo is named after?",
    choices: [
      "The car's designer",
      "The Italian town where the founder first raced",
      "The Ferrari providing grounds(race track)",
      "The founder of Ferrari",
    ],
    answer: "The founder of Ferrari",
  },
];

var time = questions.length * 15;

//start quiz function
function beginQuiz(event) {
  console.log("the button was a sucess");
  //hide the start screen during the quiz
  var startquizEl = document.getElementById("begin");
  startquizEl.setAttribute("class", "hide");

  // make questions appear on the screen to being quiz
  questionsEl.removeAttribute("class");
  // start the timer
  timerId = setInterval(clockCountDown, 1000);
  timerEl.textContent = time;
  // show starting time on the page
  getQuestions();
}

// Get Quiz questions
function getQuestions() {
  // create a variable to acess the current list of questions
  var currentQuestions = questions[questionsIndex];

  // update code question title with current code
  qTitle.textContent = currentQuestions.title;
  // clear old question choices
  choicesEl.innerHTML = "";

  // loop over the choices by using forEach
  currentQuestions.choices.forEach(function (choice) {
    var BtnElement = document.createElement("button");
    BtnElement.setAttribute("value", choice);
    BtnElement.textContent = choice;
    BtnElement.addEventListener("click", clickQuestions);
    choicesEl.append(BtnElement);
  });
  // attach click event to listener

  // display the choice on the page
}

// question button clicks
function clickQuestions() {
  // error handling needed for incorrect answer to question
  //console.log("from page: ", this.value)
  //console.log('From array: ', questions[questionsIndex].answer)
  if (this.value !== questions[questionsIndex].answer) {
    //console.log("wrong")
    // And add the time deduction
    time -= 5;
    // display the new time once the time is deducted
    timerEl.textContent = time;
    // flash the wrong/right feedback on the page under the questions
    feedbackEl.textContent = "wrong";
  } else {
    //console.log("correct")
    // flash the wrong/right feedback on the page under the questions
    feedbackEl.textContent = "correct";
  }

  // move to the next question
  questionsIndex++;

  // check if we've finished asking all the questions
  if (questionsIndex === questions.length) {
    endtheQuiz();
  } else {
    getQuestions();
  }
}

// End the quiz
function endtheQuiz() {
  // stop the timer
  clearInterval(timerId);

  // show final screen

  finalScreen.removeAttribute("class");
finalScore.textContent=time

  // hide questions
  questionsEl.setAttribute("class", "hide");
}

// timer function
function clockCountDown() {
  // update the time
  time--;
  timerEl.textContent = time;
  // check if the user is out of time
  if (time <= 0) {
    endTheQuiz();
  }
}
// save the users score
function saveHighscores() {
    // console.log('I was called')
  // get value from your input box
  //console.log(initialsEl)
  var initials = initialsEl.value;
  // make sure the user wrote their initials in the box
  if (!initials) {
    alert(
      "Hey you what are you doing speed racer enter your initals! be sure to just use two letter please."
    );

    return;
  }
  // local storage
  var allScores = JSON.parse(localStorage.getItem('highscores')) || [];
  var newScore = {
    initials: initials,
    score: time,
  };
  allScores.push(newScore);
  localStorage.setItem("highscores", JSON.stringify(allScores));
  window.location.href="highscores.html"
  // redirect to the next page (highscore.html)
}

// Key event functions
function enterBtnEvent() {}

// // user clicks button to submit their initials
submitBtn.onclick = saveHighscores;
// // user clicks to begin the quiz
startBtn.addEventListener("click", beginQuiz);
// this checks if the user hit enter for their initials
// initialsEl.onkeyup = enterBtnEvent;

var array = ["orange", "apple", "kiwi"];

localStorage.setItem("fruit", JSON.stringify(array));

console.log(JSON.parse(localStorage.getItem("fruit")));
