const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");
let getInterval;
$canvas.width = window.innerWidth / 2;
$canvas.height = window.innerHeight;
let frames = 0;
const covids = [];
const covids2 = [];
let score = 0;
let score2 = 0;


//Class Background
class Road {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.img = new Image();
    this.img.src = "../recursos/carretera.png";
  }
  //Método
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

//Class Avatar
class Avatar {
  // una sola clase para los dos avatars
  constructor(imagenes, x, y) {
    // donde saco mis imagenes
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 80;
    this.speed = 20;
    this.img = new Image();
    this.img.src = imagenes;
    this.puntaje=0;
    this.xInicial=x;
    this.yInicial=y;
  }
  //metodo de avatar
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  moveUp() {
    this.y -= this.speed;
  }
  moveDown() {
    this.y += this.speed;
  }
  moveRight() {
    this.x += this.speed;
  }
  moveLeft() {
    this.x -= this.speed;
  }

  //conocer sus dimensiones dependiendo la posicion
  left() {
    return this.x;
  }
  rigth() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  crashWith(obstacle){
    return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.rigth() < obstacle.left() || this.left() > obstacle.rigth());

  }
resetToInitialPosition(){
  this.x=this.xInicial;
  this.y=this.yInicial;
  this.draw();
}

}

//Class Covidw
class Covid {
  constructor(x, y) {
    this.width = 45;
    this.height = 45;
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = "../recursos/covid.png";
  }
  //metodo covid
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  left() {
    return this.x;
  }
  rigth() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  
}

//Instancias
const road = new Road();
const avatar1 = new Avatar("../recursos/AvatarChica.png",$canvas.width*.30,$canvas.height - 80);
const avatar2 = new Avatar("../recursos/chico.png",$canvas.width*.60, $canvas.height - 80);
const covid = new Covid();

//event listeners
window.onload = () => {
  // cuando carga la ventana
  startGame();
};
//listener de presion de teclas
document.onkeydown = (event) => {
  switch (event.keyCode) {
    case 38:
      avatar2.moveUp();
      break;
    case 40:
      if (avatar2.y < canvas.height - 80) {
        avatar2.moveDown();
      }
      break;
    case 37:
      if (avatar2.x > canvas.width*.50) {
        avatar2.moveLeft();
      }
      break;
    case 39: 
    if(avatar2.x < canvas.width*.67){
      avatar2.moveRight();
    }break;
    case 87:
      avatar1.moveUp(); //W
      if(avatar1.y==0){
        
      }
      break;
    case 83:
      console.log(avatar1.y);
      if (avatar1.y < canvas.height - 80) {
        avatar1.moveDown(); //S
      }
      break;
    case 65:
        if(avatar1.x>canvas.width*.23){// porcentaje del ancho del canvas (siendo  canvas  width el 100% del ancho ) para que no se muevan los avatars .
      avatar1.moveLeft(); //A
    }break;
    case 68:
      if (avatar1.x <canvas.width*.40) {    // para que no pase a la parte del jugador 2
        avatar1.moveRight(); //D
      }
      break;
    default:
  }
};


//motor del juego
function updateGame() {
  clearCanvas();
  road.draw();
  avatar1.draw();
  avatar2.draw();
  covid.draw();
  updateCovids();
checarChoques();
  drawScore();
  drawScore2();
  
}
function startGame() {
  gameInterval = setInterval(updateGame, 1000 / 60);
}
function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
}

function updateCovids() {
  for (let i = 0; i < covids.length; i++) {
    covids[i].x--; // inicie desde lado derecho hacia izquierdo
    covids[i].draw();
    covids2[i].x++;
    covids2[i].draw();
  }
  frames += 1;
  if (frames % 90=== 0) {
    let x = Math.floor(Math.random() * ($canvas.width + 1));
    let y = Math.floor(Math.random() * ($canvas.height + 1));
    covids.push(new Covid(800, y));
    covids2.push(new Covid(0, y));
  }
  
}
//score -dose
function drawScore() {
  ctx.font = "15px Century Gothic";
  ctx.fillStyle = "white";
  ctx.fillText("Dose: " + score, 10, 20);
}
function drawScore2() {
  ctx.font = "15px Century Gothic";
  ctx.fillStyle = "white";
  ctx.fillText("Dose: " + score2,$canvas.width*.90, 20);
}

function checarChoques(){
  for(let i=0;i< covids.length;i++){// itera por los dos arrays ya que ambos tienen las misma longuitud 
    
    avatar2.crashWith(covids[i])
    avatar2.crashWith(covids2[i])
    if(avatar1.crashWith(covids[i])||avatar1.crashWith(covids2[i])){
      console.log(`${avatar1}choco`)
       avatar1.resetToInitialPosition();
    }
    if(avatar2.crashWith(covids[i])||avatar2.crashWith(covids[i])){
      console.log(`${avatar2}choque`)
      avatar2.resetToInitialPosition();
  }
}




}