// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.


let misAmigos = [];

console.log (misAmigos);

function agregarAmigo() {
let nombresDeAmigos = document.getElementById('amigo').value;

if (nombresDeAmigos === "") {

    alert ('Ingrese Nombre de Amigo');
    return;
}

misAmigos.push(agregarAmigo);
agregarAmigo();
document.getElementById('amigo').value = "";

}
