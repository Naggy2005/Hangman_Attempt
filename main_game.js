import random from 'random'; // So we can give the computer the ability to pick a random word from a list
import { stages, logo } from './hangman_ascii.js'; // Presenting the stages of your life count
import { words_alpha } from './words.js'; // Has the list of words that will be used in the game

// const words = ['forest', 'mountain', 'ocean', 'surprise'];

// Generate a random word
const chosen_word = words_alpha[Math.floor(Math.random() * words_alpha.length)].toLowerCase(); // This picks a random word from the list imported from the other file
const len_chosen_word = chosen_word.length;
// console.log(chosen_word);

// Generate blanks for word
const word_display = Array(len_chosen_word).fill('_');
console.log(word_display);

let game_over = false;
const incorrect_guesses = [];
let lives_left = 7;

// Ask user to guess letter
while (!game_over) {
    // Break points are the red dots
    const guessed_letter = prompt('Guess a letter: ').toLowerCase(); // User input allows for player to input a letter

    // Check if letter is in the word
    if (word_display.includes(guessed_letter) || incorrect_guesses.includes(guessed_letter)) {
        console.log(`You have already guessed ${guessed_letter}. Try Again`); // This prevents from a player guessing the same letter more than once
        console.log(`You have ${lives_left} lives left.`);
    } else if (!chosen_word.includes(guessed_letter)) {
        console.log(` Your guess "${guessed_letter}" is not in the chosen word. You lose a life`);
        lives_left--; // Same as lives_left - 1
        console.log(`You have ${lives_left} lives left.`);
        incorrect_guesses.push(guessed_letter);

        // Are there lives equal to zero
        if (lives_left === 0) { // If you have 0 lives left, this will tell you the game is over and you lose
            game_over = true;
            console.log('You are out of guesses. Game over.');
            console.log(` The word was ${chosen_word}.`);
        }
    } else {
        // Taken value and finding the index of the letter in list
        chosen_word.split('').forEach((val, idx) => {
            if (val === guessed_letter) {
                word_display[idx] = guessed_letter;
            }
        });
    }

    // If you've guessed all of the letters
    console.log(word_display);
    if (!word_display.includes('_')) { // If you have zero blank spaces, then you win the game
        game_over = true;
        console.log("You've guessed all the letters. Game over. You Win");
        console.log(` The word was ${chosen_word}.`);
    }
    // The picture of how many lives are left
    console.log(stages[lives_left]);
}