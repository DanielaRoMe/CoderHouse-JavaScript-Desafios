const menu = {
    comidas: [],
    bebidas: []
}
    
class Productos{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

function agregandoBebidas(){
    alert("Vamos a agregar algunas bebidas a nuestro menu, puedes guiarte por el HTML");
    for(i=0; i<=3; i++){
        let bebida = prompt("Nombre de la bebida");
        let precio = parseInt(prompt("Ingrese el precio"));
        while (isNaN(precio)){
            alert("Por favor ingrese caracteres numéricos");
            precio = parseInt(prompt("Ingrese el precio"));
        }

        menu.bebidas.push(new Productos(bebida,precio));
    }
}
function agregandoComidas (){
    alert("Y ahora agregaremos algunos alimentos a nuestro menu, puedes guiarte por el HTML");
    for(i=0; i<=3; i++){
        let comida = prompt("Nombre de la comida");
        let precio = parseInt(prompt("Ingrese el precio"));
        while (isNaN(precio)){
            alert("Por favor ingrese caracteres numéricos");
            precio = parseInt(prompt("Ingrese el precio"));
        }
        menu.comidas.push(new Productos(comida,precio));
    }
}


agregandoBebidas();
agregandoComidas();

console.log(menu);