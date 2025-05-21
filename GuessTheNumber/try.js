const minNUM = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNUM + 1)) + minNUM;

let attempt = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`🎯 Guess a number between ${minNUM} and ${maxNum}:`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("🚫 Please enter a valid number!");
        continue;
    }

    if (guess < minNUM || guess > maxNum) {
        window.alert(`🔢 Number must be between ${minNUM} and ${maxNum}. Try again.`);
        continue;
    }

    attempt++;

    if (guess < answer) {
        window.alert("📉 Too low! Try again.");
    } else if (guess > answer) {
        window.alert("📈 Too high! Try again.");
    } else {
        window.alert(`🎉 Correct! The answer was ${answer}. You guessed it in ${attempt} attempts.`);
        running = false;
    }
}
