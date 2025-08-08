class Autor{
    constructor(id,nombre){
        this.nombre = nombre;
        this.id = id;
        this.libros = [];
    }
    agregarLibro(libro){
        if(!this.libros.includes(libro)){
            this.libros.push(libro);
            libro.setAutor(this);
        }
    }
    quitarLibro(libro){
        for (let i=0;i>this.libros.length;i++){
            if(this.libros[i].isbn===libro){
                this.libros.slice(0,i)
            }
        }
    }
}

module.exports = Autor;


