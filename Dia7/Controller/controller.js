// Join View and Model

// Importar funciones del Model
const { createItem, listItems, updateItem, deleteItem } = require('../Model/Model');

// Importar funciones de la View
const {
  showMenu,
  name,
  elementCreate,
  updateSucceful,
  deleteSucceful,
  listData,
  idUdate,
  idDelete
} = require('../View/view');


function option1(){
    const nombre = name();
    createItem(nombre);
    elementCreate();
}

function option2(){
    let data = listItems()
    listData(data);
}

function option3(){
    let id = idUdate();
    let nombre = name();
    updateItem(id,nombre);
    updateSucceful();
}

function option4(){
    let id = idDelete();
    deleteItem(id);
    deleteSucceful();
}

function menu(){
        let option = showMenu();
        return option
}

module.exports = {
    option1,
    option2,
    option3,
    option4,
    menu
}
