function mostrar(){
  var texto = document.getElementById("escribir").value;
      document.getElementById("preview").value = texto;
}
function enviar(){
  var contenedorCom= document.getElementById("contenedor");
  var preview= document.getElementById("preview");
  var nodo= preview.cloneNode(true);
     contenedorCom.appendChild(nodo);
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
function centro(){
       var preview =document.getElementById("preview");
         preview.style.textAlign = "center";
     }
function alinearD(){
         var preview =document.getElementById("preview");
             preview.style.textAlign = "right";
     }
