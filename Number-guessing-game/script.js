function guessNumber(number) {
    let guess;
    let guessCount = 5;
    let usedGuesses = 1;

    alert('Lets play a game!\nU must guess a number (0-50)');
    let agree = confirm('Do u wanna play?');

    if (agree === true) {
        alert('You have 5 attempts to guess');
        while (guess != number) {

            guess = prompt('What\'s the number?', '');

            if (isNaN(guess) || guess === '') {
                alert('You didnt write a number, try again');
            }
            if (guess === null) {
                let quit = confirm('Do you want to quit?')

                if (quit == true) {
                    return alert('You quit!');
                }
            }
            if (isFinite(guess)) {
                guess = parseInt(guess);
            }
            if (guess > number) {
                alert(`It's less than ${guess}`)
                guessCount -= 1;
                usedGuesses += 1;
                alert(`Guesses left ${guessCount}`);
            }
            if (guess < number) {
                alert(`It's more than ${guess}`)
                guessCount -= 1;
                usedGuesses += 1;
                alert(`Guesses left ${guessCount}`);
            }
            if (guessCount < 1) {
                return alert(`You lost!\nNumber was ${number}.`);
            }
        }

        if (guess == number) {
            return alert(`You won!\nNumber is ${number}.\nGuesses required ${usedGuesses}`);
        }

    } else {
        return alert('U could play a cool game but u didnt want to.')
    }

}
guessNumber(Math.trunc(Math.random() * 50));