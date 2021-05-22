var block_A=document.getElementById('block_A');
var hole_A=document.getElementById('hole_A');
var blockBottom_A=document.getElementById('block-bottom_A');
var blockTop_A=document.getElementById('block-top_A');
var gameOverLabel=document.getElementById('game-over-label');
var bird=document.getElementById('bird');
var jumping=false;
var gameOver=false;


hole_A.addEventListener('animationiteration',()=>{
    if(!gameOver){
        var random_A=-((Math.random()*400)+150);
        hole_A.style.top=random_A+'px';
        blockBottom_A.style.top=random_A+'px';
        blockTop_A.style.top=random_A-190+'px';
    }else{
        block_A.style.animation="none"
        blockTop_A.style.animation="none"
        blockBottom_A.style.animation="none"
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
