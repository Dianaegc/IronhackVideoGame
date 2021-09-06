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
        this.img.src="../recursos/carretera.png"
    }
    //Método
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
}
//Class Avatar
class Avatar{
    constructor(imagenes,x,y){ // donde saco mis imagenes 
        this.x=x;
        this.y=y;
        this.width=80;
        this.height=80;
        this.img = new Image();
        this.img.src = imagenes;

    }
    //metodo de avatar
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }

}
//Instancias
const road=new Road();
const avatar1= new Avatar("../recursos/AvatarChica.png",250,800);
const avatar2=new Avatar("../recursos/chico.png",450,800);

//event listeners 
window.onload=()=>{ // cuando carga la ventana 
    startGame();


};

//motor del juego
function updateGame(){
    clearCanvas(); 
    road.draw();
    avatar1.draw();
    avatar2.draw();
}
function startGame(){
    gameInterval=setInterval(updateGame,1000/60)
}
function clearCanvas(){
    ctx.clearRect(0,0,$canvas.width,$canvas.height)
}