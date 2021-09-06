const $canvas=document.querySelector("canvas")
const ctx=$canvas.getContext("2d");
let getInterval;
$canvas.width=window.innerWidth/2;
$canvas.height=window.innerHeight;


//Class Background
class Road{
    constructor(){
        this.x=0;
        this.y=0;
        this.width=$canvas.width;
        this.height=$canvas.height;
        this.img=new Image();
        this.img.src="/IronhackVideoGame/recursos/carretera.png"
    }
    //Método
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
}
//Class Avatar
class Avatar{
    constructor(){

    }
}
//Instancias
const road=new Road();

//event listeners 
window.onload=()=>{
    startGame();
    background.draw();

};

//motor del juego
function updateGame(){
    road.draw()
}
function startGame(){
    gameInterval=setInterval(updateGame,1000/60)
}
function clearCanvas(){
    ctx.clearRect(0,0,$canvas.width,$canvas.height)
}