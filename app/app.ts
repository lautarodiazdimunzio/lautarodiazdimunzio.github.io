var valor1: string = "Puchioso";
var valor2: string = "Quime";

var besitos = (valor1: string, valor2: string) => {
    alert("resultado = " + valor2 + " beso mucho a " + valor1 + " y el se desenojo y se desentristepuchisio");
};




const contador = document.getElementById("contar");
const sumar = document.getElementById("incr")

let numero = 0;

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML= numero;
})