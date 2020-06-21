# Word Guess Game

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
        - decrease the guesses lefr by one
        - mark as a selected letter

- while there are guesses left, allow the player to select again
    - continue until either:
        - word is solved (player wins)
        - player runs out of guesses (player loses)

## Display

- Show all 26 letters, change to a strikethrough for any letter selected
- A counter to keep track of number of guesses left