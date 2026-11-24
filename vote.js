const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");

let vote1 = 0;
let vote2 = 0;
let vote3 = 0;

btn1.addEventListener("click", function(){
    vote1++;
    bar1.style.height = vote1 * 40 + "px";
    span1.innerText = vote1;
});

btn2.addEventListener("click", function(){
    vote2++;
    bar2.style.height = vote2 * 40 + "px";
    span2.innerText = vote2;
});

btn3.addEventListener("click", function(){
    vote3++;
    bar3.style.height = vote3 * 40 + "px";
    span3.innerText = vote3;
});