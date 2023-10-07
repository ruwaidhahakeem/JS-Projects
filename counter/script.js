let btnDecrease=document.getElementById("decrease");
let btnReset=document.getElementById("reset");
let btnIncrease=document.getElementById("increase");

var value=document.querySelector('#counter');
//btnBlue.addEventListener("click", bgColorBlue);

btnIncrease.addEventListener("click", increase);
btnDecrease.addEventListener("click", decrease);
btnReset.addEventListener("click", reset);

function decrease(){
    let currentVal=parseInt(value.textContent);
    currentVal--;
    value.textContent=currentVal
}
function reset(){
    value.textContent=0;
}
function increase(){
    let currentVal=parseInt(value.textContent);
    currentVal++;
    value.textContent=currentVal
}