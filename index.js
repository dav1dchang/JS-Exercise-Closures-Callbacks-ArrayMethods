// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter1 has the variable count inside the function counterMaker whereas in counter2, count is a global variable. Additionally, counter1 returns the function which leads to the count++ whereas counter2 returns the count++.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter2 code uses closure because the count++ is within the scope of the function counter2, however, it references the variable 'let count = 0', which is in the outer scope.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * Counter 1 would be preferable to use in a higher-order function and counter 2 would be preferable to use as a callback function.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(score){

  return score = Math.floor(Math.random() * 3);

}//function inning

console.log(`The team scored ${inning()} runs in an inning`)//invoking function and logging the result

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

//changed name of callback function
function runsCalc(score){

  return score = Math.floor(Math.random() * 3);

}

let homeTeam = 0;
let awayTeam = 0;

function finalScore(inningScore, inning){

  for (let i = 0; i < inning; i++) {

    homeTeam += runsCalc();
    awayTeam += runsCalc();

  }//for

  let score = {
               'Home': homeTeam,
               'Away': awayTeam,
  } 
  return score;

}//function finalScore

console.log(finalScore(runsCalc, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

//random runs calculator per inning taken from task 2
function runsCalc(score){

  return score = Math.floor(Math.random() * 3);

}

let home = 0;
let away = 0;

function scoreboard(inningScore, inning) {

  let currentInning = 0;
  for (let i = 0; i < inning; i++){

    currentInning++;//adding incremental innings
    console.log(`Inning #${currentInning}: ${inningScore()}`)

  }//for

  return console.log(`Final Score: Away Team: ${away} - Home Team: ${home}`);

}//function scoreboard

let inningScore = function(){
  
    home += runsCalc();
    away += runsCalc();
    return `${away} - ${home}`

}//inningScore

scoreboard(inningScore, 9);//invoking function