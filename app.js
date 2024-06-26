

let randomNumber = Math.floor((Math.random()*10)+1);
console.log(randomNumber);

let attempts = 3;
function guessnumber(){
    if (attempts == 0) {
        alert("Game over!");
        return;
    }

   
    attempts--;

    const userGuess = document.getElementById('game').value;

            
            const guess = parseInt(userGuess);

           
            const resultElement = document.getElementById('result');

           
            if (guess === randomNumber) {
                resultElement.textContent = 'Congratulations! You guessed the correct number!';
                resultElement.style.color = 'green';
            } else if (guess < randomNumber) {
                resultElement.textContent = ' Try a higher number.';
                resultElement.style.color = 'blue';
            } else {
                resultElement.textContent = ' Try a lower number.';
                resultElement.style.color = 'red';
            }
            if (attempts == 0) {
                resultElement.textContent = "You have used all your attempts! ";
            }
        }