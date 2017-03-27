function mostrar(){
  var texto = document.getElementById("escribir").value;
  var copia =document.getElementById("preview");
      copia.innerHTML = texto;
}
function enviar(){
  var contenedorCom= document.getElementById("contenedor");
  var preview= document.getElementById("preview");
  var nodo= preview.cloneNode(true);
  nodo.id= new Date();
  var ele =document.getElementById("escribir");
     contenedorCom.appendChild(nodo);
     ele.innerText="";
     preview.innerHTML="";
}
function textoG(){
var preview =document.getElementById("preview");
    preview.style.fontSize = "48px";
 }
function textoM(){
     var preview =document.getElementById("preview");
     preview.style.fontSize = "26px";
  }
function textoP(){
     var preview =document.getElementById("preview");
      preview.style.fontSize = "15px";
   }

function alinearI(){
    var preview =document.getElementById("preview");
        preview.style.textAlign = "left";
      }
function centro(){
       var preview =document.getElementById("preview");
         preview.style.textAlign = "center";
     }
function alinearD(){
         var preview =document.getElementById("preview");
             preview.style.textAlign = "right";
     }
function colorT(){
   var preview =document.getElementById("preview");
   var color= prompt("Elige un color");
       preview.style.color = color;
    }
function colorF(){
    var preview =document.getElementById("preview");
    var color= prompt("Elige un color de fondo");
        preview.style.background = color;
     }
