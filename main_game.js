
import random from 'random';
import { stages, logo } from './hangman_ascii.js'; 
import { words_alpha } from './words.js'; 




const chosen_word = words_alpha[Math.floor(Math.random() * words_alpha.length)].toLowerCase(); 
const len_chosen_word = chosen_word.length;



const word_display = Array(len_chosen_word).fill('_');
console.log(word_display);

let game_over = false;
const incorrect_guesses = [];
let lives_left = 7;


while (!game_over) {
    
    const guessed_letter = prompt('Guess a letter: ').toLowerCase(); 

    
    if (word_display.includes(guessed_letter) || incorrect_guesses.includes(guessed_letter)) {
        console.log(`You have already guessed ${guessed_letter}. Try Again`); 
        console.log(`You have ${lives_left} lives left.`);
    } else if (!chosen_word.includes(guessed_letter)) {
        console.log(` Your guess "${guessed_letter}" is not in the chosen word. You lose a life`);
        lives_left--; 
        console.log(`You have ${lives_left} lives left.`);
        incorrect_guesses.push(guessed_letter);

        
        if (lives_left === 0) { 
            game_over = true;
            console.log('You are out of guesses. Game over.');
            console.log(` The word was ${chosen_word}.`);
        }
    } else {
        
        chosen_word.split('').forEach((val, idx) => {
            if (val === guessed_letter) {
                word_display[idx] = guessed_letter;
            }
        });
    }

    
    console.log(word_display);
    if (!word_display.includes('_')) { 
        game_over = true;
        console.log("You've guessed all the letters. Game over. You Win");
        console.log(` The word was ${chosen_word}.`);
    }
    
    console.log(stages[lives_left]);
}