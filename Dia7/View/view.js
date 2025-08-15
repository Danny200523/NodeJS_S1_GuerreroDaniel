// Print everything

const prompt = require('prompt-sync')();

function showMenu(){
    console.log("==== CRUD en Consola con Node.js ====")
    console.log("1. Crear elemento")
    console.log("2. Listar elementos")
    console.log("3. Actualizar elemento")
    console.log("4. Eliminar elemento")
    console.log("5. Salir")

    let opcionUsuario = prompt("Ingrese una opcion: ")
    return opcionUsuario;
}

function name(){
    const nombre = prompt("Ingrese el nombre: ");
    return nombre;
}

function elementCreate(){
    console.log("Elemento creado con exito");
}

function updateSucceful(){
    console.log("Elemento actualizado con exito");
}

function deleteSucceful(){
    console.log("Elemento eliminado con exito");
}

function listData(data){
    console.table(data);
}


function idUdate(){
    let id = prompt("Ingrese el id del elemento a actualizar: ");
    return id;
}

function idDelete(){
    let id = prompt("Ingrese el id del elemento a eliminar: ");
    return id;
}

module.exports = {
    showMenu,
    name,
    elementCreate,
    updateSucceful,
    deleteSucceful,
    listData,
    idUdate,
    idDelete
}