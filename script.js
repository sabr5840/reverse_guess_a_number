document.addEventListener('DOMContentLoaded', () => {
  let min = 1;
  let max = 100;
  let guessedMade = 0;
  makeGuess(min, max, guessedMade); // Korrekt inkludering af alle argumenter
});

function makeGuess(min, max, guessedMade) {
  let guess = Math.floor(min + (max - min) / 2);
  guessedMade++; // Øg tælleren for hvert gæt
  displayGuess(guess, min, max, guessedMade); 
}

function displayGuess(guess, min, max, guessedMade) { 
  let guessesDiv = document.getElementById('guesses');
  guessesDiv.innerHTML = `I'm guessing ${guess}. Is that... ` +
    `<button id="too-low">Too Low</button>` +
    `<button id="too-high">Too High</button>` +
    `<button id="correct">Correct!</button>` +
    `Attempt: ${guessedMade}`; 

  // Ret event listeners til at inkludere guessedMade
  document.getElementById('too-low').addEventListener('click', () => {
    makeGuess(guess + 1, max, guessedMade); 
  });

  document.getElementById('too-high').addEventListener('click', () => {
    makeGuess(min, guess - 1, guessedMade); 
  });

  document.getElementById('correct').addEventListener('click', () => alert(`Hooray! I guessed it in ${guessedMade} attempts!`));
}
