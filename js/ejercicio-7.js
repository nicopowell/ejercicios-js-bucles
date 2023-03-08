/*
Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let numero = parseInt(prompt("Ingrese un número:"));

while (isNaN(numero) === true || numero < 1 || numero > 50) {
    numero = parseInt(
        prompt("El valor ingresado no es valido, ingreselo nuevamente:")
    );
}

for (let i = numero; i >= 1; i--) {
    document.write("<p>");
    for (let j = i; j >= 1; j--) {
        document.write(i);
    }
    document.write("</p>");
}
