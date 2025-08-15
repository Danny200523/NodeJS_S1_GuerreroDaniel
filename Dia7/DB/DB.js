// read and write DB

const path = "./db.json";
const fs = require('fs')

function verifyDB(){
    if(!fs.existsSync(path)){
        fs.writeFileSync(path,"[]");
    };
}

function loadData(){
    verifyDB();
    const data = fs.readFileSync(path);
    return JSON.parse(data);
}

function saveData(data){
    fs.writeFileSync(path,JSON.stringify(data));
}

module.exports = {
    loadData,
    saveData
}