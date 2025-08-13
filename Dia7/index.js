const prompt = require('prompt-sync')();
const path = "./db.json";
const fs = require('fs')

function loadData(){
    if(!fs.existsSync(path)){
        fs.writeFileSync(path,"[]");
    };
    const data = fs.readFileSync(path);
    return JSON.parse(data);
}

function saveData(data){
    fs.writeFileSync(path,JSON.stringify(data));
}


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


function handleMenu(option){
    switch(option){
        case "1":
            createItem();
            break;
        case "2":
            listItems();
            break;
        case "3":
            updateItem();
            break;
        case "4":
            deleteItem();
            break;
        case "5":
            console.log("Saliendo del programa...");
            booleanito = false;
        default:
            console.log("Opcion no valida");
    }
}

function createItem(){
    const data = loadData();
    const nombre = prompt("Ingrese el nombre: ");
    const id = Date.now();
    const newItem = {nombre,id};
    console.log(data)
    data.push(newItem);
    saveData(data);
    console.log("Elemento creado con exito");
    showMenu();
}

let booleanito = true;
while(booleanito){
    const option = showMenu();
    handleMenu(option);
}

function listItems(){
    let data = loadData();
    console.table(data);
}

function updateItem(){
    let data = loadData();
    let id = prompt("Ingrese el id del elemento a actualizar: ");
}

function deleteItem(){
    let data = loadData();
    let id = prompt("Ingrese el id del elemento a eliminar: ");
}