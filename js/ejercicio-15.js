// Realiza un script que cuente el número de vocales que tiene un texto.

let vocales = 0;

let texto = prompt("Introduce un texto:");
texto = texto.toLowerCase();

for (let i = 0; i < texto.length; i++) {
    if (
        texto[i] === "a" ||
        texto[i] === "e" ||
        texto[i] === "i" ||
        texto[i] === "o" ||
        texto[i] === "u"
    ) {
        vocales++;
    }
}

document.write(`<p>El texto contiene ${vocales} vocales</p>`);
