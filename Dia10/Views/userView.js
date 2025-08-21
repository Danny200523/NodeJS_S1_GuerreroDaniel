const prompt = require('prompt-sync')();

class UsuarioView{
    pedirDatosUsuario(){
        const nombre = prompt('Ingrese su nombre: ');
        const correo = prompt('Ingrese su correo: ');
        const edad = parseInt(prompt('Ingrese su edad: '));
        return {
            nombre, correo, edad
        };
    }
    mostrarMensaje(msg){
        console.log(msg)
    }
    mostrarUsuarios(usuarios){
        console.log("\n--Lista de Usuarios--\n");
        usuarios.forEach(usuario => {
            console.log(`Nombre: ${usuario.nombre}`);
            console.log(`Correo: ${usuario.correo}`);
            console.log(`Edad: ${usuario.edad}`);
            console.log("---------------------");
        });
    }
}

module.exports = UsuarioView;