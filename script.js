let buttons=document.getElementsByClassName('button');
let p1Choice=document.getElementById('p1Choice');
let p2Choice=document.getElementById('p2Choice');
let screenResult=document.getElementById('result');
let p1Score=document.getElementById('your-score');
let p2Score=document.getElementById('cpu-score');

console.log(buttons);

for(let i=0;i<buttons.length;i++){
  buttons[i].addEventListener('click',buttonFunction);
}
//call back function for e listener calls play function with button selected choice
function buttonFunction(e){
    let b=e.target.value;
    p1Choice.textContent=`You Chose ${b}`;

    playGame(b);
}
//play game function receives choice from listener callback and runs function with that choice
//--------------------------------------------
let yourScore=0;
let cpuScore=0;
function playGame(choice){
    // computer choice
    let choiceArray=['rock','paper','scissors']
    let cpuChoice=choiceArray[Math.floor(Math.random()*3)];
    p2Choice.textContent=`Computer Chose ${cpuChoice}`;

    // console.log(cpuChoice); //computer choice

    let result;

    if(choice==cpuChoice){
        console.log(`You chose: ${choice} vs Computer: ${cpuChoice}. Tie Game`);//output 1
        result='tied';
    }
    else if(choice=='rock'){
        result= cpuChoice=='scissors'? 'win':'lose';
        console.log(`You chose: ${choice} vs Computer: ${cpuChoice}. You ${result}`);
    }
    else if(choice=='scissors'){
        result= cpuChoice=='paper'? 'win':'lose';
        console.log(`You chose: ${choice} vs Computer: ${cpuChoice}. You ${result}`);

    }  else if(choice=='paper'){
        result= cpuChoice=='rock'? 'win':'lose';
        console.log(`You chose: ${choice} vs Computer: ${cpuChoice}. You ${result}`);
    }
    
    screenResult.textContent=`You ${result}`;

    if(result=='win'){
        yourScore++;
        p1Score.textContent=`Your Score: ${yourScore}`;

    }
    else if(result=='lose') {cpuScore++;
        p2Score.textContent=`CPU Score: ${cpuScore}`;
    }

    if(yourScore==5||cpuScore==5){
        alert('Game Over')
    }
    
    
}
//-------------------------------------------------