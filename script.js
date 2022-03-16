let buttons=document.getElementsByClassName('button');

console.log(buttons);

for(let i=0;i<buttons.length;i++){
  let a=  buttons[i].addEventListener('click',buttonFunction);
}

function buttonFunction(e){
    let b=e.target.value;
    return b;

}

console.log(a);