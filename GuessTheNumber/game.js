let startBTN = document.querySelector('#start');
let msg = document.querySelector('#msg');
let input = document.querySelector('#TakeInput');
let btnBox = document.querySelector('#button');
let checkBTN = document.querySelector('#Check');
let cancelBTN = document.querySelector('#cancel');
let restartBTN = document.querySelector('#restart');
let body = document.querySelector('body');

let minNUM = 1;
let maxNum = 100;
let answer;
let attempt;
let maxAttempts = 10;
let gameRunning = false;

// Show game rules before game starts
msg.classList.remove('hidden');
msg.innerHTML = `
🎮 <strong>Game Rules:</strong><br>
1. Guess a number between <strong>${minNUM} and ${maxNum}</strong>.<br>
2. You have <strong>${maxAttempts} attempts</strong>.<br>
3. Too high/low hints will be shown.<br>
4. Cancel clears input, Restart starts a new game.
`;

function initializeGame() {
    answer = Math.floor(Math.random() * (maxNum - minNUM + 1)) + minNUM;
    attempt = 0;
    gameRunning = true;
    body.classList.remove("bg-green-500");
    body.classList.add("bg-black");
    msg.innerHTML = `Guess the Number between (${minNUM} - ${maxNum})<br>Attempt: 0 | Left: ${maxAttempts}`;
    input.value = '';
    input.disabled = false;
    checkBTN.disabled = false;
}

// Show game UI on Start
startBTN.addEventListener('click', () => {
    msg.classList.remove('hidden');
    input.classList.remove('hidden');
    btnBox.classList.remove('hidden');
    startBTN.classList.add('hidden');
    initializeGame();
});

// Check Button Logic
checkBTN.addEventListener('click', () => {
    if (!gameRunning) return;

    let guess = Number(input.value);

    if (isNaN(guess)) {
        msg.innerHTML = `🚫 Please enter a valid number!<br>Attempt: ${attempt} | Left: ${maxAttempts - attempt}`;
        return;
    }

    if (guess < minNUM || guess > maxNum) {
        msg.innerHTML = `🔢 Please enter a number between ${minNUM} and ${maxNum}.<br>Attempt: ${attempt} | Left: ${maxAttempts - attempt}`;
        return;
    }

    attempt++;

    if (guess < answer) {
        msg.innerHTML = `📉 Too low! Try again.<br>Attempt: ${attempt} | Left: ${maxAttempts - attempt}`;
    } else if (guess > answer) {
        msg.innerHTML = `📈 Too high! Try again.<br>Attempt: ${attempt} | Left: ${maxAttempts - attempt}`;
    } else {
        msg.innerHTML = `🎉 CORRECT! You guessed it in ${attempt} attempts.`;
        body.classList.remove("bg-black");
        body.classList.add("bg-white");
        input.classList.add("bg-green-500")
        gameRunning = false;
        input.disabled = true;
        checkBTN.disabled = true;
        return;
    }

    if (attempt >= maxAttempts && gameRunning) {
        msg.innerHTML = `❌ Game Over! The answer was ${answer}.<br>You used all ${maxAttempts} attempts.`;
        input.disabled = true;
        checkBTN.disabled = true;
        gameRunning = false;
    }
});

// Cancel Button (Clear Input)
cancelBTN.addEventListener('click', () => {
    input.value = '';
});

// Restart Button
restartBTN.addEventListener('click', () => {
    input.classList.remove("bg-green-500")
    input.classList.add("bg-white")
     body.classList.remove("bg-white");
         body.classList.add("bg-black");
    initializeGame();
});
