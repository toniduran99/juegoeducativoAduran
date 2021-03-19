function tirarColor(){
// color que tira la maquina y correcto
var color=document.getElementById("color_maquina");  
var colore=document.getElementById("color_usuario_correcto");
 function colorCorrecto() {  
  var a=Math.floor(Math.random()*255);  
  var b=Math.floor(Math.random()*255);  
  var c=Math.floor(Math.random()*255);  
   
  color.style.backgroundColor='rgb('+a+','+b+','+c+')';
  colore.style.backgroundColor='rgb('+a+','+b+','+c+')';   
  
 }  
 console.log(colorCorrecto());

 // colores incorrectos

 var color=document.getElementById("color_usuario_incorrecto_a");  
 function colorAleatorioUsuarioA() {  
  var a=Math.floor(Math.random()*255);  
  var b=Math.floor(Math.random()*255);  
  var c=Math.floor(Math.random()*255);  
   
  color.style.backgroundColor='rgb('+a+','+b+','+c+')';  
  
 }  
 console.log(colorAleatorioUsuarioA());

  var color=document.getElementById("color_usuario_incorrecto_b");  
 function colorAleatorioUsuarioB() {  
  var a=Math.floor(Math.random()*255);  
  var b=Math.floor(Math.random()*255);  
  var c=Math.floor(Math.random()*255);  
   
  color.style.backgroundColor='rgb('+a+','+b+','+c+')';  
  
 }  
 console.log(colorAleatorioUsuarioB());
 

 // desordenar posiciones de colores
 $.fn.randomize = function(selector){
    (selector ? this.find(selector) : this).parent().each(function(){
        $(this).children(selector).sort(function(){
            return Math.random() - 0.5;
        }).detach().appendTo(this);
    });
    return this;
};
$(document).ready(function(){

    $('.usuario').randomize('div');
});
}

 console.log(tirarColor());


 var test = document.getElementById('color_usuario_correcto');
test.onclick = function() {
    console.log(tirarColor());
}
// contar puntos

let score= 0;
function counting_points(){
    document.getElementById('puntos').innerHTML= ++score; 
    document.getElementById('pntos').innerHTML= score;
}
var test = document.getElementById('color_usuario_correcto');
test.onclick = function() {
    console.log(counting_points());
    console.log(tirarColor());

}







// contar fallos
let modal = document.getElementById("popup1")
let counter= 0;
function counting(){
    document.getElementById('fallos').innerHTML= ++counter;
    if (counter==3){
        //location.href="menu.html";
        //document.getElementById("warning").innerHTML= message;
        modal.classList.add("show");
        console.log(counting_ponts());

    }   
}
function countingB(){
    document.getElementById('fallos').innerHTML= ++counter;
    if (counter==3){
        //location.href="menu.html";
        //document.getElementById("warning").innerHTML= message;
        modal.classList.add("show");
        
    }

    
}

// contar los fallos 

var test = document.getElementById('color_usuario_incorrecto_a');
test.onclick = function() {
    console.log(counting());
}

var test = document.getElementById('color_usuario_incorrecto_b');
test.onclick = function() {
    console.log(countingB());
}




// contador de tiempo


let comienzoMinutos = 1;
let time = comienzoMinutos * 60;

let contador = document.getElementById('contador');

setInterval(updateCountdown, 1000) ;

function updateCountdown(){
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    time>=0;
    
    contador.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (seconds ==1){
        modal.classList.add("show");
    }  
}






