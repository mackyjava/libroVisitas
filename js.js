function mostrar(){
  var texto = document.getElementById("escribir").value;
  var copia =document.getElementById("preview");
      copia.innerHTML = texto;
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
     function enviar(){
       var contenedorCom= document.getElementById("contenedor");
       var preview= document.getElementById("preview");
       var nodo= preview.cloneNode(true);
       var ele =document.getElementById("escribir");
       var nuvBot=document.createElement("button");
          nodo.id=  Date.now();
          nuvBot.value=nodo.id;
          nuvBot.innerText= "borrar";
          nuvBot.onclick = function(){
            var elementoDel=document.getElementById(this.value);
            contenedorCom.removeChild(this);
            contenedorCom.removeChild(elementoDel);
      }
          ele.value="";
          preview.innerHTML="";
          contenedorCom.insertBefore(nodo,contenedorCom.firstChild);
          contenedorCom.insertBefore(nuvBot,contenedorCom.firstChild);
     }
