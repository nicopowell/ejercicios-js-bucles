/*
Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let numero = parseInt(prompt("Ingrese un número:"));

while (isNaN(numero) === true || numero < 1 || numero > 50) {
    numero = parseInt(
        prompt("El valor ingresado no es valido, ingreselo nuevamente:")
    );
}

for (let i = 1; i <= numero; i++) {
    document.write("<p>");
    for (let j = 1; j <= i; j++) {
        document.write(i);
    }
    document.write("</p>");
}
