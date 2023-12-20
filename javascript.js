// Seleziona tutti gli elementi con la classe 'form-control'
var formControls = document.getElementsByClassName("form-control");

// Itera su tutti gli elementi form-control e assegna la funzione clearFormOnKeyUp all'evento onkeyup
for (var i = 0; i < formControls.length; i++) {
 formControls[i].onkeyup = clearFormOnKeyUp;
}

function clearFormOnKeyUp() {
 // Reset the value of the input field to an empty string
 this.value = "";
}