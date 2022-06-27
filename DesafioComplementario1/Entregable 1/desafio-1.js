alert("Bienvenido al primer desafío complementario");

let nombre = prompt("Ingrese su nombre");
alert (`Bienvenido/a ${nombre}, juguemos un juego bastante simple`);
let numero = parseInt(prompt("Adivina mi numero favorito. Pista: se encuentra entre 1 y 10"));

while (numero != 8){
    switch (numero){
        case numero:
            alert("No has adivinado, intenta nuevamente");
            break;
        default:
            alert("Creí haberte pedido un número, vuelve a intentarlo");
            break;

    }
    numero = parseInt(prompt("Adivina mi numero favorito. Pista: se encuentra entre 1 y 10"));
}
alert(`Genial ${nombre}, has adivinado!`);

alert("Contador regresivo para salir");
for(let i = 10; i >= 0; i--){
    alert(`Continue para salir ${i}`);
}