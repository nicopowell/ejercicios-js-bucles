/*
Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let suma = 0;
let numero;

while (confirm("¿Quieres introducir un número?") == true) {
    numero = parseInt(prompt("Introduce un número: "));
    if (!isNaN(numero)) {
        suma += numero;
    } else {
        alert("El valor ingresado no es un número");
    }
}

document.write(`<p>La suma de todos los números ingresados es ${suma}</p>`);
