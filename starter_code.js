$(document).ready(function(){

    var gameState = {
        playerOneScore: 0,
        playerTwoScore: 0,
        playerOneName: "",
        playerTwoName: "",
        isPlayerOnesTurn: true
    };
    
    var updateGameUI = function(shotString){
        $(".result").text("");
        if(shotString){
            $(".result").text(shotString);
        }
      $("#player-one-score").text(gameState.playerOneScore);
      $(".player-one-name").text(gameState.playerOneName);
      $("#player-two-score").text(gameState.playerTwoScore);
      $(".player-two-name").text(gameState.playerTwoName);
    };
    
    var updateTurnUI = function(){
        var currentPlayer;
        if(gameState.isPlayerOnesTurn){
            currentPlayer = gameState.playerOneName;
        }
        else{
            currentPlayer = gameState.playerTwoName;
        }
        $(".whose-turn").text(currentPlayer + " has the ball.");  
    };
    
    var startGame = function(){
        gameState.playerOneScore = 0;
        gameState.playerTwoScore = 0;
        gameState.playerOneName = window.promptForPlayerName && window.promptForPlayerName("Player 1");
        gameState.playerTwoName = window.promptForPlayerName && window.promptForPlayerName("Player 2");
        updateGameUI();  
        updateTurnUI();
    };
    
    var changeTurn = function(currentScore, playerName){
        gameState.isPlayerOnesTurn = !gameState.isPlayerOnesTurn;
        updateTurnUI();
        if(window.isEndOfGame(currentScore, playerName)){
            startGame();
        }
    }
    
    $(".js-two-pointer").click(function(){
       var success = window.tryTwoPointShot();
       var scoreToUpdate = gameState.isPlayerOnesTurn ? gameState.playerOneScore : gameState.playerTwoScore;
       var newScore = window.updateScore(success, scoreToUpdate, 2);
       var playerName;
       if(gameState.isPlayerOnesTurn){
           gameState.playerOneScore = newScore;
           playerName = gameState.playerOneName;
       }
       else{
           gameState.playerTwoScore = newScore;
           playerName = gameState.playerTwoName;
       }
       var shotString = window.getShotString(playerName, 2, success);
       updateGameUI(shotString);
       changeTurn(newScore, playerName);
    });
    
    $(".js-three-pointer").click(function(){
       var success = window.tryThreePointShot();
       var scoreToUpdate = gameState.isPlayerOnesTurn ? gameState.playerOneScore : gameState.playerTwoScore;
       var newScore = window.updateScore(success, scoreToUpdate, 3);
       var playerName;
        if(gameState.isPlayerOnesTurn){
           gameState.playerOneScore = newScore;
           playerName = gameState.playerOneName;
       }
       else{
           gameState.playerTwoScore = newScore;
           playerName = gameState.playerTwoName;
       }
       var shotString = window.getShotString(playerName, 3, success);
       updateGameUI(shotString);
       changeTurn(newScore, playerName);
    });
    
    
    $(".js-reset").click(function(){
        startGame(); 
    });
    
    startGame();


});