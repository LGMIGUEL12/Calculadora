var operancion1;
var operacion2;
var operar;

function inicio() {
    var resultado = document.getElementById("resultado");
    var borrar = document.getElementById("borrar");
    var listo = document.getElementById("listo");
    var sumar = document.getElementById("sumar");
    var restar = document.getElementById("restar");
    var dividir = document.getElementById("dividir");
    var multiplicar = document.getElementById("multiplicar");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1"
    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2"
    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3"
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5"
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6"
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7"
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8"
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
    }
    borrar.onclick = function (e) {
        borrartodo();
    }
    sumar.onclick = function (e) {
        operancion1 = resultado.textContent;
        operar = "+";
        limpiar()
    }
    restar.onclick = function (e) {
        operancion1 = resultado.textContent;
        operar = "-";
        limpiar()
    }
    dividir.onclick = function (e) {
        operancion1 = resultado.textContent;
        operar = "/";
        limpiar()
    }
    multiplicar.onclick = function (e) {
        operancion1 = resultado.textContent;
        operar = "*";
        limpiar()
    }
    listo.onclick = function (e) {
        operacion2 = resultado.textContent;
        resolver();
    }

}

function limpiar() {
    resultado.textContent = "";
}

function borrartodo() {
    resultado.textContent = "";
    operancion1 = 0;
    operacion2 = 0;
    operar = "";
}

function resolver() {
    var res = 0;
    switch (operar) {
        case "+": res = parseFloat(operancion1) + parseFloat(operacion2);
            break;
        case "-": res = parseFloat(operancion1) - parseFloat(operacion2);
            break;
        case "*": res = parseFloat(operancion1) * parseFloat(operacion2);
            break;
        case "/": res = parseFloat(operancion1) / parseFloat(operacion2);
            break;
    }
    borrartodo()
    resultado.textContent = res;
}