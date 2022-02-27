
let p1answer =(prompt(`Enter your choice
0:rock
1:paper
2:scissors`));

let arr1=['rock','paper','scissors'];

// let p1answer=0;
console.log(`You chose ${arr1[p1answer]}`);

let p2answer=Math.floor(Math.random()*3);
console.log(`computer chose ${arr1[p2answer]}`);



if(p1answer==0){
    if(p2answer==0) console.log(`its a tie`);
    if(p2answer==1) console.log(`You lose!`);
    if(p2answer==2) console.log(`You win!`);
}
else if(p1answer==1){
    if(p2answer==0) console.log(`You win!`);
    if(p2answer==1) console.log(`it's a tie!`);
    if(p2answer==2) console.log(`You lose!`);
}
else if(p1answer==2){
    if(p2answer==0) console.log(`You lose!`);
    if(p2answer==1) console.log(`You win!`);
    if(p2answer==2) console.log(`it's a tie!`);
}

else
console.log('invalid entry');