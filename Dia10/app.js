const prompt = require('prompt-sync')();

const view = require('./Views/userView')
const model = require('./Models/userModel')
const controller = require('./Controllers/userController')

const modelo = new model();
const vista = new view();
const controlador = new controller(modelo,vista);

let booleanito = false;
async function main() {
    while(!booleanito){
        console.log("==== CRUD en Consola con Node.js ====")
        console.log("1. Crear elemento")
        console.log("2. Listar elementos")
        console.log("5. Salir")
        let op = parseInt(prompt(": "))
        switch (op) {
            case 1:
                await controlador.registrarUsuario();
                break;
            case 2:
                await controlador.mostrarUsuarios();
                break;
            case 5:
                console.log("SU PAPAAAAA, ADIOSSSSSSS")
                booleanito = true;
                break;
            default:
                break;
        }
    }   
}

main();