# Reverse Guess The Number - Part 1

### Deployment on GitHub Pages

My site is live at: https://sabr5840.github.io/reverse_guess_a_number/

## Introduction

In this coursework project, I have developed a reverse version of the traditional "Guess the Number" game. Unlike the classic variant, this game features the computer as the guesser, tasked with identifying the secret number I have in mind. My role is to guide the computer's guesses by indicating whether each guess is too low, too high, or correct.

This version introduces a binary search algorithm to enhance the guessing process, making the computer's attempts more systematic and efficient compared to random guessing. This approach significantly reduces the number of guesses needed to find the correct number by narrowing down the possible range based on the feedback provided.

## Project Requirements

The assignment requires developing a user interface utilizing HTML, CSS, and JavaScript. The core functionality involves presenting a guess from the computer and capturing user feedback through buttons that indicate:

- Too Low
- Too High
- Correct

Initially, the game was designed to proceed with random guesses. However, with the incorporation of the binary search algorithm, it now follows a more intelligent approach in subsequent guesses until the correct number is identified. The main goal at this stage was to ensure seamless operation of the interface, setting the stage for further enhancements.

## Development Process

### Steps to Follow

1. **HTML Structure**: Begin by designing the HTML layout to display after a series of incorrect guesses, including the necessary buttons for user feedback.
2. **JavaScript Logic**: Implement the main function in JavaScript to check that it outputs something in the console upon page load.
3. **Event Listeners**: Add a function for setting up event listeners on the feedback buttons, along with separate functions to handle each type of feedback.
4. **Guess Generation**: Create a function for generating new guesses and another function for displaying these guesses on the screen.
5. **Feedback Handling**: Modify the feedback functions to display a message after the most recent guess and to generate a new guess for "Too Low" or "Too High" feedback, but conclude the game for "Correct" feedback.
6. **Final Adjustments**: Implement adjustments in the feedback functions to ensure a new guess is made for "Too Low" and "Too High" responses, and the game stops when "Correct" is selected.

## What is GitHub Pages?

GitHub Pages is a free service provided by GitHub to host static websites directly from a GitHub repository. Ideal for HTML, CSS, and JavaScript sites, it offers an easy and cost-free way to publish web content.

## Why Use GitHub Pages?

Free Hosting: Perfect for showcasing projects, documentation, or blogs without any cost.
Ease of Use: Easily deploy your site directly from your GitHub repository.
Git Integration: Leverage Git's version control features for managing your website's content and collaboration.
The Purpose of GitHub Pages

## GitHub Pages simplifies sharing and publishing your work online, ideal for:

Portfolio Sites: Display your work and resume.
Project Documentation: Host documentation to make your projects more accessible.
Blogs: Share updates, tutorials, or insights related to your projects or interests.
Learning and Experimentation: An excellent platform for beginners to build and deploy websites with ease.
In essence, GitHub Pages offers a straightforward and free method to bring static content to the web, making it widely accessible.
