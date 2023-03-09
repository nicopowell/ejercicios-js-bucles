//Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto = prompt("Introduce un texto:");
let textoInvertido = "";
console.log(texto.length);

for (i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}
document.write(`<p>${textoInvertido}</p>`);
