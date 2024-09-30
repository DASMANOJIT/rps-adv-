let player1Choice = null;
let player2Choice = null;
let player1Score = 0;
let player2Score = 0;
let totalRounds = 0;
let currentRound = 0;

function startGame() {
    totalRounds = parseInt(document.getElementById('rounds').value);
    player1Score = 0;
    player2Score = 0;
    currentRound = 0;
    document.getElementById('result').innerText = '';
    document.getElementById('score').innerText = '';
    alert(`Game started! Total rounds: ${totalRounds}`);
}

function playerChoice(player, choice) {
    if (player === 1) {
        player1Choice = choice;
    } else {
        player2Choice = choice;
    }

    // Check if both players have made their choice
    if (player1Choice && player2Choice) {
        currentRound++;
        const result = determineWinner(player1Choice, player2Choice);
        document.getElementById('result').innerText = `Player 1 chose: ${player1Choice}\nPlayer 2 chose: ${player2Choice}\nResult: ${result}`;

        // Update scores based on the result
        if (result === "Player 1 wins!") {
            player1Score++;
        } else if (result === "Player 2 wins!") {
            player2Score++;
        }

        // Display scores
        document.getElementById('score').innerText = `Score: Player 1 - ${player1Score}, Player 2 - ${player2Score}`;

        // Check if the game has reached the total rounds
        if (currentRound === totalRounds) {
            declareFinalWinner();
        }

        // Reset choices for the next round
        player1Choice = null;
        player2Choice = null;
    }
}

function determineWinner(player1, player2) {
    if (player1 === player2) {
        return "It's a tie!";
    }
    if (
        (player1 === 'rock' && player2 === 'scissors') ||
        (player1 === 'paper' && player2 === 'rock') ||
        (player1 === 'scissors' && player2 === 'paper')
    ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

function declareFinalWinner() {
    let finalResult = '';
    if (player1Score > player2Score) {
        finalResult = "Player 1 is the overall winner!";
    } else if (player2Score > player1Score) {
        finalResult = "Player 2 is the overall winner!";
    } else {
        finalResult = "It's a tie overall!";
    }
    document.getElementById('result').innerText += `\n\n${finalResult}`;
}
