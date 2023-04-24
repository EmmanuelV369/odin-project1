function getComputerChoice(playerSelection, computerSelection) {


if (playerSelection > computerSelection) {

  result = "Win"

  return console.log(`You ${result}! ${playerSelection} beats ${computerSelection}`)

} else if (playerSelection < computerSelection) {

  result = "lose"


  return console.log(`You ${result}! ${computerSelection} beats ${playerSelection}`)

} else (playerSelection === computerSelection)

  result = "Tie"

  return console.log(`You ${result}! ${playerSelection} with ${computerSelection}`)

}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min) + min))

}

getRandomInt(1, 5);

getComputerChoice(getRandomInt(1, 5), getRandomInt(1, 5));


for (let i = 0; i <=5; i++) {
  function getComputerChoice(playerSelection, computerSelection) {


    if (playerSelection > computerSelection) {

      result = "Win"

      return console.log(`You ${result}! ${playerSelection} beats ${computerSelection}`)

    } else if (playerSelection < computerSelection) {

      result = "lose"


      return console.log(`You ${result}! ${computerSelection} beats ${playerSelection}`)

    } else (playerSelection === computerSelection)

      result = "Tie"

      return console.log(`You ${result}! ${playerSelection} with ${computerSelection}`)

    }


    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return (Math.floor(Math.random() * (max - min) + min))

    }

    getRandomInt(1, 5);

    getComputerChoice(getRandomInt(1, 5), getRandomInt(1, 5));


}

// console.log(playerSelection)

/*




*/
