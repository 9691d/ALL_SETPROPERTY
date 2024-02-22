let box = document.querySelector(".box");
let bg = document.querySelector(".bg");
let wrapButtons = document.querySelector(".wrap_buttons");
let wrapBox2 = document.querySelector(".wrap_box2");
let box2 = document.querySelector(".box2");


function random(max, min) {
    let randomNum = Math.floor(Math.random() * (max - min)) + min;
    return randomNum;
}

function randomBg() {
    let newBg = `rgb(${random(255, 1)},${random(255, 1)},${random(255, 1)})`;
    return newBg;
}

function setRandomBg() {
    box.style.setProperty("background-color", randomBg());
}

bg.addEventListener("click",()=>{
    console.log("jjjjjjj");
    setRandomBg();
    
} );