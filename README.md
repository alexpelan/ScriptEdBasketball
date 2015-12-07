# ScriptEdBasketball
ScriptEd basketball is a two player basketball game that we will be creating. It will be a review of everything we've learned so far this year, including HTML, CSS, and Javascript.

Players alternate turns, taking two or three point shots. Once a player reaches 20 points, they are considered the winner, and the game resets.

Our rubric for this are the bullet points below each category

You will be provided with starter code - it's very important that you follow this document closely, since the starter code won't work otherwise.

# Getting Started
1. Go to https://github.com/alexpelan/ScriptEdBasketball and click on the "Fork" button to fork the starter code
2. In Cloud9 (https://c9.io), go to your Dashboard, then select Repositories, then find ScriptEdBasketball. Click "clone to edit" to create a new workspace for the starter code
3. You'll be editing 3 files: basketball.js, index.html, and style.css

# HTML - index.html
* Give the page a title
* For player one, add an h2 tag with the id **player-one-score**, then add a p tag with the class **player-one-name**. Then add an img tag (don't forget the alt attribute) to represent player one - you can be creative, choose a favorite basketball team's logo or player or whatever you want.
* Repeat this for player two, except the h2 tag should have the id **player-two-score** and the p tag should have the class **player-two-name**


# CSS - style.css
* Style player one's score by making the text italic and blue
* Style player two's score by making the text bold and red
* Style player one's name and player two's name however you want - but both must have at least one style applied

# Javascript - basketball.js
Don't touch starter_code.js, instead you'll implement functions in basketball.js. I would recommend first implementing empty functions with the names and parameters defined here, otherwise you will likely encounter errors.

* Define a function **promptForPlayerName**, which takes in one parameter. This parameter will either be the string "Player 1" or the string "Player 2". Your function must use **prompt()** to ask player 1 or player 2 for their name, and save it into a variable. If the name is longer than 15 characters, you should alert the message "Wow, that's a long name!" It should return whatever the user enters at the prompt.
* Define a function **tryTwoPointShot**, which doesn't take any parameters. This function should generate two random numbers between 0 and 1. If both random numbers are greater than 0.2, then it should return true. Otherwise it should return false.
* Define a function **tryThreePointShot**, which doesn't take any parameters. This function should generate two random numbers between 0 and 1. If the first is less than or equal to 0.2, or the second is greater than or equal to 0.8, it should return true. Otherwise it should return false.
* Define a function **getShotString**, which takes in three parameters. The first parameter is a player's name, the second parameter is the number of points for the shot attempted, and the third parameter is whether or not the shot was good(boolean). It should return a string in the following format: "<PLAYER NAME> attempted a <NUMBER OF POINTS> pointer. It was (GOOD / NO GOOD)"
* Define a function **updateScore**, which takes in three parameters. The first parameter is whether a shot was made or not (boolean), the second one is the current number of points of the player shooting, and the third is how many points the shot was for. If the shot was made, this function should add the number of points the shot was for to the score and return the score. Otherwise, it should return the score.
* Define a function **isEndOfGame**, which takes in two parameters. The first is the current player's score and the second is the current player's name. If the score is >= 20, this function should alert "The game is over, <PLAYER NAME> won". If the score is >=20, this function should return true. Otherwise, it should return false.


# Submitting
To submit, go to the bash tab at the bottom of your cloud9 window and type the following:
* git status
* git add .
* git commit -m "Basketball project"
* git push origin master

Then go to github.com, find ScriptEdBasketball under your repositories on the right, and copy the url to send in the submission form.
