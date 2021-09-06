const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");
let getInterval;
$canvas.width = window.innerWidth / 2;
$canvas.height = window.innerHeight;

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
  constructor(imagenes, x, y) {
    // donde saco mis imagenes
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 80;
    this.speed=10;
    this.img = new Image();
    this.img.src = imagenes;
  }
  //metodo de avatar
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  moveUp(){
    this.y -= this.speed;
  }
  moveDown(){
      this.y += this.speed;
  }
  moveRight(){
      this.x += this.speed;
  }
  moveLeft(){
      this.x -= this.speed;
  }
}
//Instancias
const road = new Road();
const avatar1 = new Avatar("../recursos/AvatarChica.png", 250, 800);
const avatar2 = new Avatar("../recursos/chico.png", 450, 800);

//event listeners
window.onload = () => {
  // cuando carga la ventana
  startGame();
};
//listener de presion de teclas
document.onkeydown = (event) => {
  switch (event.keyCode) {
    case 38:
      avatar1.moveUp();
      break;
    case 40:
      avatar1.moveDown();
      break;
    case 37:
      avatar1.moveLeft();
      break;
    case 39:
      avatar1.moveRight();
      break;
    case 87:
      avatar2.moveUp();
      break;
    case 83:
      avatar2.moveDown();
      break;
    case 65:
      avatar2.moveLeft();
      break;
    case 68:
      avatar2.moveRight();
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
}
function startGame() {
  gameInterval = setInterval(updateGame, 1000 / 60);
}
function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
}
