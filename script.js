let p1Score=0;
let p2Score=0;

let playRound=function(){

let p1answer =(prompt(`Enter your choice
rock
paper
scissors`));

p1answer=p1answer.toLowerCase();

let arr1=['rock','paper','scissors'];

console.log(`You chose ${p1answer}`);

let p2answer=arr1[Math.floor(Math.random()*3)];
console.log(`computer chose ${p2answer}`);

if(p1answer==`rock`){
    if(p2answer==`rock`) return (`its a tie`);
    if(p2answer=='paper') {p2Score++; return (`You lose!`)};
    if(p2answer==`scissors`) {p1Score++; return (`You win!`);}
}
else if(p1answer=='paper'){
    if(p2answer==`rock`) {p1Score++; return (`You win!`);}
    if(p2answer=='paper') return (`it's a tie!`);
    if(p2answer==`scissors`) {p2Score++; return (`You lose!`)};
}
else if(p1answer=='scissors'){
    if(p2answer==`rock`) {p2Score++; return (`You lose!`)};
    if(p2answer=='paper') {p1Score++; return (`You win!`);}
    if(p2answer==`scissors`) return (`it's a tie!`);
}

else
console.log('invalid entry');
}

// console.log(playRound());

let game=function(){
    for(let i=0;i<5;i++){
        console.log(playRound());
    }
    console.log(`You: ${p1Score} Computer: ${p2Score}`);
}

game();