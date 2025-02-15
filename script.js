'use strict'
// 1行目に記載している 'use strict' は削除しないでください
const elA = document.querySelector(".A");
const elB = document.querySelector(".B");
const iflame1 = document.querySelector(".upper");
const iflame2 = document.querySelector(".lower");
const btn = document.querySelectorAll(".btn");
const upperRight = document.querySelector(".upperRight");
const lowerRight = document.querySelector(".lowerRight");

function focus(event) {
    if (event.target.id === "1") {
        elA.style.width = "100%";
        elB.style.display = "none";
    } else if (event.target.id === "2") {
        iflame2.style.display = "none"
        WindowGetClikc3.style.visibility = "hidden";
        WindowGetClikc6.style.visibility = "hidden";
        elB.style.width = "100%";
        iflame1.style.height = "100%";
        upperRight.style.height = "95%";
    } else if (event.target.id === "3") {
        iflame1.style.display = "none"
        WindowGetClikc2.style.visibility = "hidden";
        WindowGetClikc5.style.visibility = "hidden";
        elB.style.width = "100%";
        iflame2.style.height = "100%";
        lowerRight.style.height = "95%";
    }
}

function revert(event) {
    if (event.target.id === "A") {
        elA.style.width = "50%"
        elB.style.width = "50%";
        elB.style.display = "block"
    } else if (event.target.id === "B") {
        elA.style.width = "50%"
        elB.style.width = "50%";
        iflame1.style.height = "50%";
        iflame2.style.display = "block"
        WindowGetClikc3.style.visibility = "visible";
        WindowGetClikc6.style.visibility = "visible";
        upperRight.style.height = "85%"
    } else if (event.target.id === "C") {
        elA.style.width = "50%"
        elB.style.width = "50%";
        iflame2.style.height = "50%";
        iflame1.style.display = "block"
        WindowGetClikc2.style.visibility = "visible";
        WindowGetClikc5.style.visibility = "visible";
        lowerRight.style.height = "90%";
    }
}

const WindowGetClikc1 = document.querySelectorAll('input')[0];
const WindowGetClikc2 = document.querySelectorAll('input')[2];
const WindowGetClikc3 = document.querySelectorAll('input')[4];

const WindowGetClikc4 = document.querySelectorAll('input')[1];
const WindowGetClikc5 = document.querySelectorAll('input')[3];
const WindowGetClikc6 = document.querySelectorAll('input')[5];

WindowGetClikc1.addEventListener("click",focus);
WindowGetClikc2.addEventListener("click",focus);
WindowGetClikc3.addEventListener("click",focus);

WindowGetClikc4.addEventListener("click",revert);
WindowGetClikc5.addEventListener("click",revert);
WindowGetClikc6.addEventListener("click",revert);
