const bebidas = [];
const comidas = [];
    
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

        bebidas.push(new Productos(bebida,precio));
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
        comidas.push(new Productos(comida,precio));
    }
}

agregandoBebidas();
agregandoComidas();


const totalBebidas = bebidas.reduce((total, bebida)=> total + bebida.nombre + " $" + bebida.precio + "\n", "" );
console.log("Usted ha ingresado los siguientes productos: \n"+ totalBebidas);

const totalComidas = comidas.reduce((total,comida)=> total + comida.nombre + " $" + comida.precio + "\n", "" )
console.log("Usted ha ingresado los siguientes productos: \n"+ totalComidas);