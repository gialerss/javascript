// Seleziona tutti gli elementi di tipo pulsante sulla pagina
var pulsanti = document.querySelectorAll('button');

// Itera attraverso la NodeList di pulsanti e rimuovili uno per uno
pulsanti.forEach(function(pulsante) {
    pulsante.remove();
});
