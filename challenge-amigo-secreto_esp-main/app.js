// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Nombre de alumno: Emanuel Matias Sanchez, correo: elemaxtoro@gmail.com


//iniciando proyecto con el array
let amigos = [];

//funcion para agregar amigos 
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value;
    // si el campo esta vacio saldra un alert
    if (nombre ==="") {alert("Por favor,escribe un nombre.");
        return;
    }
        

//avisa sobre un nombre duplicado
for (let i = 0; i < amigos.length;i++){
    if (amigos[i] === nombre) {alert("Este nombre ya esta incluido");
        return;
    }
}
//luego de validar agrega el nombre
amigos.push(nombre);
//limpia el campo
input.value = "";
//actualiza la lista de amigos en pantalla
mostrarAmigos();
}

//esta funcion muestra los amigos agregados
function mostrarAmigos() {
    let lista =  document.getElementById("listaAmigos");
    //limpia la lista antes de volver a mostrar amigos
    lista.innerHTML= "";
//agrega cada amigo del array como un nuevo item de lista
    for (let i = 0; i < amigos.length;i++) { 
        lista.innerHTML +="<li>" + amigos[i] + "</li>";
    }
}
//esta funcion es para sortear los nombres
//primero valida que al menos hayan 2 nombres antes de sortear
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para hacer el sorteo");
        return;
    }
    //Genera un numero aleatorio entre el 0 y el largo del array
    let indice = Math.floor(Math.random() * amigos.length);
    //obtiene el nombre aleatorio
    let nombreSorteado = amigos[indice];
    //muestra el resultado en pantalla
    document.getElementById("resultado").innerText = "El amigo secreto es:" + nombreSorteado;
}




 


    

a
