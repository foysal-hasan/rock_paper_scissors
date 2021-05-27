
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let userScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');
let result = document.querySelector('.result');

let uScore = 0;
let cScore = 0;

const com = ["Rock", "Paper", "Scissors"];

function comResult(){
  let index = Math.floor(Math.random()* com.length)
  return com[index]
}

rock.addEventListener('click',()=>game('Rock'))

paper.addEventListener('click',()=>game('Paper'))

scissors.addEventListener('click',()=>game('Scissors'))

function game(name){
  const returnValue = comResult();
  // rock beats scissors 
  // scissors beats paper
  // paper beats rock
  // User wins result
  let bothresult = name + returnValue;
  
  if(bothresult == "PaperPaper" || bothresult == "RockRock" || bothresult == "ScissorsScissors" ){
    result.textContent = `User chose "${name}" and Computer chose "${returnValue}" Draw!`;
    
  }else if(bothresult == "RockScissors"){
    result.textContent = `User chose "${name}" and Computer chose "${returnValue}" User won!`;
    uScore = uScore + 1
    userScore.textContent = uScore
  }else if(bothresult == "ScissorsPaper"){
    result.textContent = `User chose "${name}" and Computer chose "${returnValue}" User won!`;
    uScore = uScore + 1;
    userScore.textContent = uScore
  }else if(bothresult == "PaperRock"){
   result.textContent = `User chose "${name}" and Computer chose "${returnValue}" User won!`;
   uScore = uScore + 1;
   userScore.textContent = uScore
  }else{
    //computer wins result
    result.textContent = `User chose "${name}" and Computer chose "${returnValue}" Computer won!`;
    cScore = cScore + 1
    computerScore.textContent = cScore
  }
  
}
