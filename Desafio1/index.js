alert("Bienvenido a la cafetería Books'n'Coffee");
alert("Por medidas cautelares a causa del COVID, hemos implementado un menú online, desde el cual podrá elegir, ordenar y abonar lo que desee consumir");

let eleccion = parseInt(prompt("1 - Para seleccionar la bebida o 2- Para seleccionar la comida / 0 - Para salir"));

function multiplicar(num1, num2) {
    if (num2 === 0) {
        alert("Debe ingresar una cantidad mayor a 0");
    } else {
        return num1 * num2;
    }
}

let cantidad, total;


const calcBebida = (par1) => {
    switch (par1) {
        case 1:
            total = multiplicar(100, cantidad);
            alert(`Usted ha ordenado ${cantidad} de café. Costo total = $ ${total}`);
            break;
        case 2:
            total = multiplicar(150, cantidad);
            alert(`Usted ha ordenado ${cantidad} de cortado. Costo total = $ ${total}`);
            break;
        case 3:
            total = multiplicar(140, cantidad);
            alert(`Usted ha ordenado ${cantidad} de té. Costo total = $ ${total}`);
            break;
        case 4:
            total = multiplicar(180, cantidad);
            alert(`Usted ha ordenado ${cantidad} de capuccino. Costo total = $ ${total}`);
        default:
            alert("Ha ingresado un valor incorrecto, vuelve a intentarlo");
            eleccion = parseInt(prompt("1 - Para seleccionar la bebida o 2- Para seleccionar la comida / 0 - Para salir"));
            break;
    }
}

const calcComida = (par1) => {
    switch (par1) {
        case 1:
            total = multiplicar(200, cantidad);
            alert(`Usted ha ordenado ${cantidad} unidad/es. Costo total = $ ${total}`);
            break;
        case 2:
            total = multiplicar(160, cantidad);
            alert(`Usted ha ordenado ${cantidad} unidad/es. Costo total = $ ${total}`);
            break;
        case 3:
            total = multiplicar(50, cantidad);
            alert(`Usted ha ordenado ${cantidad} unidad/es. Costo total = $ ${total}`);
            break;
        default:
            alert("Ha ingresado un valor incorrecto, vuelve a intentarlo");
            eleccion = parseInt(prompt("1 - Para seleccionar la bebida o 2- Para seleccionar la comida / 0 - Para salir"));
            break;
    }
}

while (eleccion > 2) {
    alert("Ingrese una opcion correcta");
    eleccion = parseInt(prompt("1 - Para seleccionar la bebida o 2- Para seleccionar la comida / 0 - Para salir"));
}
if (eleccion === 1) {
    let bebida = parseInt(prompt("1- Café $100 / 2 - Cortado $150 / 3- Té $140 / 4- Capuccino $180 "));
    if (bebida <= 4 && bebida != 0) {
        cantidad = parseInt(prompt("¿Cuantas bebidas de este producto desea ordenar?"));
        calcBebida(bebida);
    } else {
        alert("Ingrese una opcion correcta");
        bebida = parseInt(prompt("1- Café $100 / 2 - Cortado $150 / 3- Té $140 / 4- Capuccino $180 "));
        cantidad = parseInt(prompt("¿Cuantas bebidas de este producto desea ordenar?"));
        calcBebida(bebida);
    }
    alert("Gracias por visitarnos");
} else if (eleccion === 2) {
    let comida = parseInt(prompt("1- Tostado $200 / 2 - Medialuna $160 / 3- Scon $50"));
    if (comida <= 3 && comida != 0) {
        cantidad = parseInt(prompt("¿Cuantas unidades de este producto desea ordenar?"));
        calcComida(comida);
    } else {
        alert("Ingrese una opcion correcta");
        comida = parseInt(prompt("1- Tostado $200 / 2 - Medialuna $160 / 3- Scon $50"));
        cantidad = parseInt(prompt("¿Cuantas unidades de este producto desea ordenar?"));
        calcComida(comida);
    }
    alert("Gracias por visitarnos");
} else {
    alert("Gracias por visitarnos");
} 