var block=document.getElementById('block');
var hole=document.getElementById('hole');
var blockBottom=document.getElementById('block-bottom');
var blockTop=document.getElementById('block-top');
var gameOverLabel=document.getElementById('game-over-label');
var bird=document.getElementById('bird');
var jumping=false;
var gameOver=false;


hole.addEventListener('animationiteration',()=>{
    if(!gameOver){
        var random=-((Math.random()*400)+150);
        hole.style.top=random+'px';
        blockBottom.style.top=random+'px';
        blockTop.style.top=random-190+'px';
    }else{
        block.style.animation="none"
        blockTop.style.animation="none"
        blockBottom.style.animation="none"
        gameOverLabel.textContent="Game Over!"
    }

});
setInterval(function(){
    var birdTop=parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
    if(!jumping && birdTop < 830){
        bird.style.top=(birdTop+3)+"px";
        bird.style.transform="rotate(20deg)"

    }
    if(birdTop==830){
        gameOver=true;
    }
    high=hole.offsetTop
    low=hole.offsetTop+150
    if(hole.offsetLeft<540){
        gameOver=true
        if(bird.offsetTop>high){
            if(bird.offsetTop<low){
                gameOver=false
                console.log("entered")
            }
        }
        if(gameOver){
            document.addEventListener("click",handler,true);
            function handler(e){
                e.stopPropagation();
                e.preventDefault();
            }
        }
    }
},10);

function jump(){
    jumping=1;
    let jumpCount=0;
    var jumpInterval=setInterval(function(){
        var birdTop=parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
        if(birdTop>160 && birdTop<800){
            if(!jumping) {
                bird.style.top=(birdTop-5)+"px";
                bird.style.transform="rotate(-20deg)"
            }
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=false;
        }
        jumpCount++; 
    },10 );
} 


// var block = document.getElementById("block");
// var hole = document.getElementById("hole");
// var character = document.getElementById("character");
// var jumping = 0;
// var counter = 0;

// hole.addEventListener('animationiteration', () => {
//     var random = -((Math.random()*300)+150);
//     hole.style.top = random + "px";
//     counter++;
// });
// setInterval(function(){
//     var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     if(jumping==0){
//         character.style.top = (characterTop+3)+"px";
//     }
//     var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
//     var cTop = -(500-characterTop);
//     if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
//         alert("Game over. Score: "+(counter-1));
//         character.style.top = 100 + "px";
//         counter=0;
//     }
// },10);

// function jump(){
//     jumping = 1;
//     let jumpCount = 0;
//     var jumpInterval = setInterval(function(){
//         var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//         if((characterTop>6)&&(jumpCount<15)){
//             character.style.top = (characterTop-5)+"px";
//         }
//         if(jumpCount>20){
//             clearInterval(jumpInterval);
//             jumping=0;
//             jumpCount=0;
//         }
//         jumpCount++;
//     },10);
// }