var operacion1 = "";
var operacion2 = "";
var operar;

function insertar(event) {
    var x = event.target.value;
    var pantalla = document.getElementById("resultado").innerText;

    if ((parseFloat(x) >= "0" && !operar)) {
        operacion1 = operacion1 + x;
        document.getElementById("resultado").innerText = operacion1;
    }

    if (operar && parseFloat(x) >= "0") {
        operacion2 = operacion2 + x;
        document.getElementById("resultado").innerText = operacion2;
    }

    if (!parseFloat(x) && !operacion2) {
        operar = x;
        document.getElementById("resultado").innerText = operacion1 + operar;
    }
    console.log("numero 1", operacion1)
    console.log("numero 2", operacion2)
    console.log("signo", operar)
}