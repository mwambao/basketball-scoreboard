
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

