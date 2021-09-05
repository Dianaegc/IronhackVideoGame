const $canvas =document.getElementById('canvas');
const ctx=$canvas.getContext("2d")
const width=canvas.style.width=window.innerWidth+'px';
const heigth=canvas.style.height=window.innerHeight+'px';
let gameInterval 
let frames=0

//Class Background
class Background{
constructor(){
    this.x=0;
    this.y=0;
    this.width=canvas.style.width=window.innerWidth+'px';
    this.height=canvas.style.height=window.innerHeight+'px';
    this.img=new Image();
    this.img.src="/IronhackVideoGame/recursos/city.jpg"
}
//Metodo
draw(){
    if(this.y >= $canvas.height) this.y=0;
    this.y++;
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
}
}
//Class Runners
class Runner{
    constructor(){
        this.x=0;
        this.y=0;
        this.width=$canvas.width;
        this.height=$canvas.height;
        this.img=new Image();
        this.img.src="/IronhackVideoGame/recursos/Man.png"
}
}

//

//Instancias
const board=new Background()
//Motor del juego
function updateGame(){
    clearCanvas();
    board.draw(); 
}

