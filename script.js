document.addEventListener('DOMContentLoaded', () => {
    makeGuess();
  });
  
  function makeGuess() {
    let guess = randomGuess();
    displayGuess(guess);
  }
  
  function randomGuess() {
    // In this version, the guess is completely random
    return Math.floor(Math.random() * 100) + 1;
  }
  
  function displayGuess(guess) {
    let guessesDiv = document.getElementById('guesses');
    guessesDiv.innerHTML = `I'm guessing ${guess}. Is that... ` +
      `<button id="too-low">Too Low</button>` +
      `<button id="too-high">Too High</button>` +
      `<button id="correct">Correct!</button>`;
  
    // Add event listeners for buttons
    document.getElementById('too-low').addEventListener('click', makeGuess);
    document.getElementById('too-high').addEventListener('click', makeGuess);
    document.getElementById('correct').addEventListener('click', () => alert('Hooray! I guessed it!'));
  }