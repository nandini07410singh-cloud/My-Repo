let scoreStore = localStorage.getItem('score');
      let score;
      resetScore(scoreStore);
      function resetScore(scoreStore){
        score = scoreStore ? JSON.parse(scoreStore) : {
                  win: 0,
                  lost: 0,
                  tie: 0,
                };
        score.displayScore = function(){
          return `Won: ${score.win}
          Lost: ${score.lost}
          Tie: ${score.tie}`;
        };
        showResult();
      }
      // let score;
      // if(scoreStore !== undefined){
      //   score = JSON.parse(scoreStore);
      // } else {
      //   score = {
      //     win: 0,
      //     lost: 0,
      //     tie: 0,
      //   };
      // }

      function generateComputerChoice(){
        let randomNumber = Math.random() * 3;
        if(randomNumber > 0 && randomNumber <= 1){
          return 'Bat';
        }
        else if(randomNumber > 1 && randomNumber <= 2){
          return 'Ball';
        }
        else if(randomNumber > 2 && randomNumber <=3){
          return 'Stump';
        }
      }

      function getResult(userMove, computerMove){
        if(userMove === 'Bat'){
          if(computerMove === 'Bat'){
            score.tie++;
            return `It's a tie`;
          }
          else if(computerMove === 'Ball'){
            score.win++;
            return 'You won';
          }
          else if(computerMove === 'Stump'){
            score.lost++;
            return 'Computer had won';
          }
        }

        else if(userMove === 'Ball'){
          if(computerMove === 'Bat'){
            score.lost++;
            return 'Computer had won';
          }
          else if(computerMove === 'Ball'){
            score.tie++;
            return `It's a tie`;
          }
          else if(computerMove === 'Stump'){
            score.win++;
            return 'You won';
          }
        }

        else if(userMove === 'Stump'){
          if(computerMove === 'Bat'){
            score.win++;
            return 'You won';
          }
          else if(computerMove === 'Ball'){
            score.lost++;
            return 'Computer had won';
          }
          else if(computerMove === 'Stump'){
            score.tie++;
            return `It's a tie`;
          }
        }
      }
    
      function showResult(userMove, computerMove, resultMsg){
        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('#user-move').innerText = 
          userMove ? `You have chosen ${userMove}` : '';

        document.querySelector('#computer-move').innerText = 
          computerMove ? `Computer choice is ${computerMove}` : '';

        document.querySelector('#result').innerText = resultMsg || '';

        document.querySelector('#score').innerText = score.displayScore();
      }