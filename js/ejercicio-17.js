//Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Introduce un texto:");
texto = texto.toLowerCase();
let posicionVocal = -1;

for (let i = 0; i < texto.length; i++) {
    if (
        texto[i] === "a" ||
        texto[i] === "e" ||
        texto[i] === "i" ||
        texto[i] === "o" ||
        texto[i] === "u"
    ) {
        posicionVocal = i;
        break;
    }
}

if (posicionVocal != -1) {
    document.write(
        `<p>La primera vocal se encuentra en la posición ${posicionVocal}</p>`
    );
} else {
    document.write("<p>El texto no tiene vocales</p>");
}
