const startGameBtn = document.getElementById('start-game-btn');

const ROCK='ROCK';
const PAPER='PAPER';
const SCISSORS='SCISSORS';
const DEFAULT_USER_CHOICE=ROCK;
const Result_Draw='DRAW';
const Result_Player_Wins='Player_Wins';
const Result_Computer_Wins='Computer_Wins';

const getPlayerChoice =function (){
    const selection=prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`,'');
    if(
    selection !== ROCK &&
    selection !== PAPER&&
    selection !== SCISSORS){
        alert(`Invalid choce ! we chose ${DEFAULT_USER_CHOICE} for you !!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}
 const GetComputerChoice =function(){
     const randvalue=Math.random();
     if(randvalue <0.35){
         return ROCK;
     }
     else if(randvalue <0.65){
         return PAPER;
     }
     else{
         return SCISSORS;
     }
 }

 /* const getWinner = (cChoice, pChoice) =>
 cChoice === pChoice
   ? RESULT_DRAW
   : (cChoice === ROCK && pChoice === PAPER) ||
     (cChoice === PAPER && pChoice === SCISSORS) ||
     (cChoice === SCISSORS && pChoice === ROCK)
   ? RESULT_PLAYER_WINS
   : RESULT_COMPUTER_WINS;
    */
const GetWinner=function( cChoice,Pchoice){
    if(cChoice ==Pchoice){
        return Result_Draw;
    }
    else 
    if ((cChoice === ROCK && Pchoice === PAPER)||
      (cChoice === PAPER && Pchoice === SCISSORS) ||
      (cChoice === SCISSORS && Pchoice === ROCK)){
return Result_Player_Wins;
      }
      else{
          Result_Computer_Wins
      }
}

startGameBtn.addEventListener('click',function(){
console.log('Game is Starting....');
const PlayerSelection=getPlayerChoice();
const ComputerChoice =GetComputerChoice();
const winner=GetWinner(ComputerChoice,PlayerSelection); 
let message = `You picked ${PlayerSelection}, computer picked ${ComputerChoice}, therefore you `;
  if (winner === Result_Draw) {
    message = message + 'had a draw.';
  } else if (winner === Result_Player_Wins) {
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }
  alert(message);
});


// not related to game
const sumup=(...number)=>{
    let sum=0;
    for(const num of number){
        sum +=num;
    }
    return sum;

};
console.log(sumup.bind(1,2,1,43,21,-12,13,33));