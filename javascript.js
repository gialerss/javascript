var inputs = document.querySelectorAll("input");

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function() {
        alert("ciao luca");
    });
}