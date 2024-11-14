var bubble="";
var score=0;
var hit='' 
var unitimer=10
var gameover=document.querySelector('.gameover')
var playarea=document.querySelector('.playarea')
var box1=document.querySelector("#box1")
var box2=document.querySelector("#box2")
var box3=document.querySelector("#box3")
var checkclick=document.querySelector(".playarea")
box1.innerHTML=score
function toHit(){
    var tohit=Math.floor(Math.random()*10)
    hit=tohit
    box3.innerHTML=tohit
}
function generateNumbers(){
    for(var i=0;i<140;i++){
        var randint=Math.floor(Math.random()*10)
        bubble+=`<div class="bubble">${randint}</div>`
    }
    playarea.innerHTML=bubble
}
function runTimer(){
    var time=60
    box2.innerHTML=time
    var timer=setInterval(()=>{
        if(time>0){
            time--;
            unitimer=time
        }
        else{
            clearInterval(timer)
            bubble="<div class='tryagain'><p class='gameover'>Game Over</p></div>"
            playarea.innerHTML=bubble
        }
        box2.innerHTML=time
    },1000)
}
function increaseScore(){
    score+=10;
    box1.innerHTML=score;
} 
checkclick.addEventListener("click",(e)=>{
    if(hit==e.target.innerText){
        increaseScore()
        bubble=" ";
        playarea.innerHTML=bubble
        generateNumbers()
        toHit()
    }
})

runTimer()
generateNumbers()
toHit()