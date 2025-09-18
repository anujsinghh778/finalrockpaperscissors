let score = JSON.parse(localStorage.getItem('Score')) || {wins: 0, losses: 0, ties: 0};
        updatescoreElement();
        function playGame(playerMove) {
            const moves = ['ROCK', 'PAPER', 'SCISSOR'];
            const randomnumber = Math.random();
            let computermove = '';
            if (randomnumber < 1/3) computermove = 'ROCK';
            else if (randomnumber < 2/3) computermove = 'PAPER';
            else computermove = 'SCISSORS';

            let result = '';
            if (playerMove === computermove) result = 'tie';
            else if (
                (playerMove === 'ROCK' && computermove === 'SCISSORS') ||
                (playerMove === 'PAPER' && computermove === 'ROCK') ||
                (playerMove === 'SCISSORS' && computermove === 'PAPER')
            ) result = 'win';
            else result = 'lose';

            if (result === 'win') score.wins += 1;
            else if (result === 'lose') score.losses += 1;
            else score.ties += 1;

            localStorage.setItem('Score', JSON.stringify(score));
            updatescoreElement();
            document.querySelector('.js-result').innerHTML= `you ${result}`;
            document.querySelector('.js-moves').innerHTML=`you
        <img src="images/${playerMove.toLowerCase()}-emoji.png" alt="" class="move-icon"> 
        <img src="images/${computermove.toLowerCase()}-emoji.png" alt="" class="move-icon" >
        computer`;

            alert(`You picked ${playerMove}. Computer picked ${computermove}. You ${result}.
        Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
        }

        function resetScore() {
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.setItem('Score', JSON.stringify(score));
            updatescoreElement();
            alert('Score reset!');
        }
        function updatescoreElement() {
            document.querySelector('.js-score')
             .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;        

        }