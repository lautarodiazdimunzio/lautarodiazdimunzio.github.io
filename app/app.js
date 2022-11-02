var valor1 = "Puchioso";
var valor2 = "Quime";
var besitos = function (valor1, valor2) {
    alert("resultado = " + valor2 + " beso mucho a " + valor1 + " y el se desenojo y se desentristepuchisio");
};
var contador = document.getElementById("contar");
var sumar = document.getElementById("incr");
var numero = 0;
sumar.addEventListener("click", function () {
    numero++;
    contador.innerHTML = numero;
});
