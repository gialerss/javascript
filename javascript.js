var inputs = document.querySelectorAll("input");

function allerta(){
    alert("ciao luca");
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function() {
        allerta();
    });
}