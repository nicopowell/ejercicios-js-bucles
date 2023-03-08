//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

let nombreMayor;

let edad1 = parseInt(prompt("Ingresa la edad de la persona 1:"));
while (isNaN(edad1) || edad1 < 0 || edad1 > 120) {
    edad1 = parseInt(
        prompt("Edad no valida, ingrese nuevamente la edad de la persona 1:")
    );
}
let nombre1 = prompt("Ingresa el nombre de la persona 1:");

let edad2 = parseInt(prompt("Ingresa la edad de la persona 2:"));
while (isNaN(edad2) || edad2 < 0 || edad2 > 120) {
    edad2 = parseInt(
        prompt("Edad no valida, ingrese nuevamente la edad de la persona 1:")
    );
}
let nombre2 = prompt("Ingresa el nombre de la persona 2:");

let edad3 = parseInt(prompt("Ingresa la edad de la persona 3:"));
while (isNaN(edad3) || edad3 < 0 || edad3 > 120) {
    edad3 = parseInt(
        prompt("Edad no valida, ingrese nuevamente la edad de la persona 1:")
    );
}
let nombre3 = prompt("Ingresa el nombre de la persona 3:");

let mayor = Math.max(edad1, edad2, edad3);

if (mayor === edad1) {
    nombreMayor = nombre1;
} else if (mayor === edad2) {
    nombreMayor = nombre2;
} else {
    nombreMayor = nombre3;
}

document.write(`${nombreMayor} de ${mayor} años es el mayor de los 3`);
