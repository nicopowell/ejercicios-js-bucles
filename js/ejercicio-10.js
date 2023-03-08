/*
Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/

let filas = parseInt(prompt("Ingrese la cantidad de filas:"));
while (isNaN(filas) === true || filas < 1) {
    filas = parseInt(
        prompt("El valor de las filas no es valido, ingreselo nuevamente:")
    );
}

let columnas = parseInt(prompt("Ingrese la cantidad de columnas:"));
while (isNaN(columnas) === true || columnas < 1) {
    columnas = parseInt(
        prompt("El valor de las columnas no es valido, ingreselo nuevamente:")
    );
}

let numero = filas * columnas;

document.write("<table>");
for (let i = 1; i <= filas; i++) {
    document.write("<tr>");
    for (let j = 1; j <= columnas; j++) {
        document.write(`<td>${numero}</td>`);
        numero--;
    }
    document.write("</tr>");
}
document.write("</table>");
