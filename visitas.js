function mostrar(){
  var texto = document.getElementById("escribir").value;
      document.getElementById("copiar").value = texto;
}
function copiar(){
  var nuText= document.getElementById("copiar").value;
  var list =document.createElement("li");
   list.appendChild(nuText);

}
