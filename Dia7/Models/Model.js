// Crud

const {loadData,saveData} = require('../DB/DB');

const prompt = require('prompt-sync')();

function createItem(nombre){
    const data = loadData();
    const id = Date.now();
    const newItem = {nombre,id};
    console.log(data)
    data.push(newItem);
    saveData(data);
}

function listItems(){
    let data = loadData();
    return data;
}

function updateItem(id,nombre){
    let data = loadData();
    id = id;
    data[id].nombre =nombre;
    saveData(data);
}

function deleteItem(id){
    let data = loadData();
    id = id;
    data.splice(id,1);
    saveData(data);
}

module.exports = {
    createItem,
    listItems,
    updateItem,
    deleteItem
}