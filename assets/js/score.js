// high score function
function printScores() {
    // getting scores from local storage or set to an empty array
        // var playerScores = JSON.parse(window.localStorage.getItem("highscores"))
        var playerScores = [];
    
        // sorting the different scores in descending order
        playerScores.sort(function(a, b) {
            return b.scores - a.scores;
        });
    
        playScores.forEach(function(scores){
        // create an li tag for the scores
            var liEl = document.createElement("li");
            liEl.textContent = scores.initials + " - " + scores.scores;
    
            var olEl = document.getElementById("highscores");
            olEl.appendChild(liEl);
    })
    };
    
    // clear high score function
    function deleteScores() {
        // will remove items from local stg
       window.localStorage.removeItem("highscores");
        // reloads the page
       window.localStorage.reload();
    }
    
    // event lister/click
    document.getElementById("delete-scores").onclick = deleteScores;
    // callback function to run the page on load
    printScores();