//Prompt picks prompt function 

function guessNum(number) {

    let pickedNum = prompt("Pick a number between 1-10", "Number")

    if (pickedNum == number) {
        console.log(`You guessed it!`)
    } else {
        guessNum(number)
    }
}

//create a random number between 1-10

let number = Math.floor(Math.random()*11)

console.log(guessNum(number))