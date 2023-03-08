//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadenaFinal = "";
let cadena = "";

while (confirm("¿Quieres introducir algo?") == true) {
    cadena = prompt("Introduce algo: ");
    if (cadenaFinal === "") {
        cadenaFinal += cadena;
    } else {
        cadenaFinal += " - " + cadena;
    }
}

document.write(`<p>${cadenaFinal}</p>`);
