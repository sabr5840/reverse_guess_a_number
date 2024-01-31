# Reverse Guess The Number - Part 1

### Deployment on GitHub Pages

Link for pages


## Introduction

As part of my coursework, I'm tasked with developing a reverse version of the "Guess the Number" game. In this twist on the classic game, the computer is the one making guesses, attempting to determine the number I have in mind. My role is to provide feedback on each guess by indicating whether it's too low, too high, or correct.

This initial iteration focuses on creating a basic user interface and interaction logic without incorporating a sophisticated guessing algorithm. The computer's guesses will be random, laying the groundwork for a more intelligent algorithm in subsequent parts of the project.

## Project Requirements

The assignment requires developing a user interface utilizing HTML, CSS, and JavaScript. The core functionality involves presenting a guess from the computer and capturing user feedback through buttons that indicate:

- Too Low
- Too High
- Correct

The game continues with random guesses until the "Correct" feedback is given. The primary objective at this stage is to ensure the interface operates smoothly, with the integration of a more complex guessing algorithm planned for the next phase of the project.

## Development Process

### Steps to Follow

1. **HTML Structure**: Begin by designing the HTML layout to display after a series of incorrect guesses, including the necessary buttons for user feedback.
2. **JavaScript Logic**: Implement the main function in JavaScript to check that it outputs something in the console upon page load.
3. **Event Listeners**: Add a function for setting up event listeners on the feedback buttons, along with separate functions to handle each type of feedback.
4. **Guess Generation**: Create a function for generating new guesses and another function for displaying these guesses on the screen.
5. **Feedback Handling**: Modify the feedback functions to display a message after the most recent guess and to generate a new guess for "Too Low" or "Too High" feedback, but conclude the game for "Correct" feedback.
6. **Final Adjustments**: Implement adjustments in the feedback functions to ensure a new guess is made for "Too Low" and "Too High" responses, and the game stops when "Correct" is selected.
