# Hangman Game

## How to Play Hangman: 
[Wikihow rules]http://www.wikihow.com/Play-Hangman

## Gameplay
- choose a random word (setup an array of a variety of words)

- display the unsolved name with the correct # of _'s
    example: A P P L E -> _ _ _ _ _ 

- prompt player to pick a letter from A to Z 
    - also keep track of the letters already chosen

- check answer to see if the letter picked is in the word
    - if it is:
        - change display of letter(s) from _ to the letter
        - mark as a selected letter
    - if it is not:
        - show next part of the Hangman
        - mark as a selected letter

- while the full Hangman is not displayed, allow the player to select again
    - continue until either:
        - word is solved (player wins)
        - Hangman is fully shown (player loses)

## Display

- Show all 26 letters, change to a strikethrough for any letter selected