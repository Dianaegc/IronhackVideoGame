const $canvas =document.getElementById('canvas');
const ctx=$canvas.getContext("2d")



let img=new Image();
img.src="/IronhackVideoGame/recursos/1399026.jpg"

ctx.drawImage(img,0,0)
img.onload=function(){
    ctx.drawImage(img,0,0);
}









//console.log( "hola ")

function fullScreen(){
    canvas.style.width=window.innerWidth+'px';
    canvas.style.height=window.innerHeight+'px';
    console.log('Ancho de mi pantalla:' + window.innerWidth);
    console.log('Alto de la pantalla:'+ window.innerHeight);

}
fullScreen();