// Eliminare tutte le immagini dal documento
let inputElements = document.getElementsByTagName("form");
for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].style.display = "none";
}