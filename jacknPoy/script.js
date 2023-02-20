///// selection
const scissor = "scissor";
const rock = "rock";
const paper = "paper";

///// winner response
const lose = "YOU LOSE!!!";
const winner = "YOU WIN!!!";
const tie = "ITS A TIE!!!";
const blank = "---";

///// bg-color
const blue = "#01bff9";
const red = "#fe7171";
const green = "#03df03";
const white = "#fff";

///// bg-image
const logoImg = "url(img/logo.webp)";
const scissorImg = "url(img/scissor.png)";
const rockImg = "url(img/rock.png)";
const paperImg = "url(img/paper.png)";
const scissorReversedImg = "url(img/scissor-reversed.png)";
const rockReversedImg = "url(img/rock-reversed.png)";
const paperReversedImg = "url(img/paper-reversed.png)";

//// buttons
const start = document.getElementById("startButton");
const reset = document.getElementById("resetButton");
const selection = document.querySelectorAll("button.option-btn");

///// image-card
const imgPlayerCard = document.getElementById("image1");
const imgComputerCard = document.getElementById("image2");

///// card
const playerCard = document.getElementById("player-card");
const computerCard = document.getElementById("computer-card");

///// default card image
imgComputerCard.style.backgroundImage = logoImg;

///// card-name
const playerCardName = document.getElementById("player1");
const computerCardName = document.getElementById("computer1");

///// match result
const matchResult = document.getElementById("matchResult");

///// selected pick
let math1;

function scissorSelect(){
playerCardName.innerHTML = scissor;
imgPlayerCard.style.backgroundImage = scissorImg;
math1 = 1;
math = math1;
}

function rockSelect(){
playerCardName.innerHTML = rock;
imgPlayerCard.style.backgroundImage = rockImg;
math1 = 2;
math = math1;
}
function paperSelect(){
playerCardName.innerHTML = paper;
imgPlayerCard.style.backgroundImage = paperImg;
math1 = 3;
math = math1;
}

function Start(){

    if(math === 1 ){
        playerCardName.innerHTML = scissor;
        imgPlayerCard.style.backgroundImage = scissorImg;
    }else if(math === 2){
        playerCardName.innerHTML = rock;
        imgPlayerCard.style.backgroundImage = rockImg;
    }else{
        playerCardName.innerHTML = paper;
        imgPlayerCard.style.backgroundImage = paperImg;
    }
    
    let math2 =  Math.floor(Math.random() * 3 + 1);
    if(math2 === 1){
        computerCardName.innerHTML = scissor;
        imgComputerCard.style.backgroundImage = scissorReversedImg;
    }else if(math2 === 2){
        computerCardName.innerHTML = rock;
        imgComputerCard.style.backgroundImage = rockReversedImg;
    }else{
        computerCardName.innerHTML = paper;
        imgComputerCard.style.backgroundImage = paperReversedImg;
    }



    if(math1 === 3 && math2 === 1){
        matchResult.innerHTML = lose;
        playerCard.style.backgroundColor = red;
        computerCard.style.backgroundColor = green;
    }else if (math1 === 1 && math2 === 3){
        matchResult.innerHTML = winner;
        playerCard.style.backgroundColor = green;
        computerCard.style.backgroundColor = red;
    }else if (math1 > math2) {
        matchResult.innerHTML = winner;
        playerCard.style.backgroundColor = green;
        computerCard.style.backgroundColor = red;
    }else if (math1 === math2) {
        matchResult.innerHTML = tie;
        playerCard.style.backgroundColor = blue;
        computerCard.style.backgroundColor = blue;
    }else {
        matchResult.innerHTML = lose;
        playerCard.style.backgroundColor = red;
        computerCard.style.backgroundColor = green;
    }
    start.disabled = true;
    reset.disabled = false;
    for (let i = 0; i < selection.length; i++){
    selection[i].disabled = true;
    }
}
function resetGame(){
    imgPlayerCard.style.backgroundImage = logoImg;
    imgComputerCard.style.backgroundImage = logoImg;
    playerCardName.innerHTML = blank;
    computerCardName.innerHTML = blank;
    matchResult.innerHTML = blank;
    playerCard.style.backgroundColor = white;
    computerCard.style.backgroundColor = white;
    reset.disabled = true;
    start.disabled = false;
    for (let i = 0; i < selection.length; i++) {
    selection[i].disabled = false;
    }
}

