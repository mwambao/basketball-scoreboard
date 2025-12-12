
//Home 
let countHome = 0;
let selectScoreHome = document.getElementById("home-score");
selectScoreHome.textContent = countHome;

function plus1Home(){
    selectScoreHome.textContent = Number( selectScoreHome.textContent ) + 1;
}


function plus2Home(){
    selectScoreHome.textContent = Number(selectScoreHome.textContent) + 2;
}

function plus3Home(){
    selectScoreHome.textContent = Number(selectScoreHome.textContent) + 3;
}


// Guest
let countGuest = 0;
let selectScoreGuest = document.getElementById("guest-score");
selectScoreGuest.textContent = countGuest;

function plus1Guest(){
    selectScoreGuest.textContent = Number( selectScoreGuest.textContent ) + 1;
}


function plus2Guest(){
    selectScoreGuest.textContent = Number( selectScoreGuest.textContent ) + 2
}

function plus3Guest(){
    selectScoreGuest.textContent = Number( selectScoreGuest.textContent ) + 3;
}

//Restart

function restart(){
    selectScoreHome.textContent = 0;
    selectScoreGuest.textContent = 0;
}