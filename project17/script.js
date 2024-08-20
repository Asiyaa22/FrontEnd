function makeBubble(){

    var bubble = "";
    
    for(let i=1; i<=70; i++){
        var random = Math.floor(Math.random()*10)
        bubble += `<div class="bubbles">${random}</div>`;
    }
    
    document.querySelector(".bubble-container").innerHTML = bubble;
}
var timer = 30;
var clearTimer = "";
function runTimer(){
    clearTimer = setInterval(function(){
        if(timer>0){
            timer--;
        }else{
           clearInterval(clearTimer);
           document.querySelector("#b-box").innerHTML = `<h2>Game Over</h2>`;
           document.querySelector("#b-box").innerHTML = `<button class="btn">Try Again</button>`;
        }
        document.querySelector("#timerValue").textContent = timer;
    }, 1000)
}
var rnHit = 0;
function getHit(){
    rnHit = Math.floor(Math.random()*10)
    document.querySelector("#hitValue").textContent = rnHit;
}
var score = 0;
function getScore(){
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}

document.querySelector(".bubble-container")
.addEventListener("click", function(details){
   var clickedNum = (Number(details.target.textContent));
   if(clickedNum === rnHit){
    getScore();
    makeBubble();
    getHit();
}else{
    document.querySelector("#b-box").innerHTML = `<h2>Wrong Hit</h2>`;
    timer = 0;
    // document.querySelector("#timerValue").textContent = timer;
    clearInterval(clearTimer);
}

});


makeBubble();
runTimer();
getHit();
// getScore();
// document.querySelector(".bubble-container").addEventListener(
//     "click", function(){
//     // alert("I am clicked");
//     makeBubble();
//     getHit();
//     runTimer();
//     function getNewScore(){
//         score = 0;
//         score += 10;
//         document.querySelector("#scoreValue").textContent = score;
//     }
//     getNewScore();
//     }
// );
