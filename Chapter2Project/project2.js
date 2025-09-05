// Jacob Phillips, 9/4/2025

let myName = "Jacob Phillips";
let para1 = document.getElementById("p1");
let n1 = 9;
let n2 = 4;
let numberSum = n1 + n2;
let numberMult = n1 * n2;
let myNameAddNum = myName + n1;
let myNameMultNum = myName * n2;
let ageCompare = 19 > numberMult;

para1.textContent = myName;
document.getElementById("p2").textContent = numberSum;
document.getElementById("p3").textContent = numberMult;
document.getElementById("p4").textContent = myNameAddNum;
document.getElementById("p5").textContent = myNameMultNum;
document.getElementById("p6").textContent = ageCompare;