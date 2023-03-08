// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = parseInt(prompt("Ingrese su edad:"));

while (isNaN(edad) === true || edad < 0 || edad > 120) {
    edad = parseInt(
        prompt("El valor ingresado no es valido, ingreselo nuevamente:")
    );
}

if (edad >= 18) {
    document.write(
        `<p>Con ${edad} años ya estas habilitado para conducir en Argentina</p>`
    );
} else {
    document.write(
        `<p>Con ${edad} años todavia no estas habilitado para conducir en Argentina</p>`
    );
}

/*
Opcion con operador condicional ternario
const mensaje = (edad >= 18) ? `ya estas habilitado` : `todavia no estas habilitado`;
document.write(`<p>Con ${edad} años ${mensaje} para conducir en Argentina</p>`);
*/
