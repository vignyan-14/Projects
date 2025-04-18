let gameSeq=[];
let userSeq=[];
let start = false;
let level=0;
let h2 = document.querySelector("h2");

let btns = ["red","green","blue","yellow"];

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("Game Started");
        start=true;

        levelup();
    }
   
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function userFlash(btn){
    btn.classList.add("userPress");
    setTimeout(function(){
        btn.classList.remove("userPress");
    },250);

}

function levelup(){
    userSeq=[];
level++;
h2.innerText=`Level ${level}`;

let ranIndx = Math.floor(Math.random()*3);
let ranClr = btns[ranIndx];
let ranBtn = document.querySelector(`.${ranClr}`);

gameSeq.push(ranClr);
console.log(gameSeq);
gameFlash(ranBtn);
}

function checkAns(idx){

    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`GAME OVER ! <b>Your score was ${level}</b> <br> Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";      
        },200)
        reset();
    }

}


function btnPress(){
let btn = this;
userFlash(btn);

userClr = btn.getAttribute("id");
userSeq.push(userClr);

checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}