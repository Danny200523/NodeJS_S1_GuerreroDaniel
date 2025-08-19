// System

const {option1,option2,option3,option4,menu} = require('./Controllers/controller');

let booleanito = true;
    while(booleanito){
    let option = menu();
    switch(option){
        case "1":
            option1();
            break;
        case "2":
            option2();
            break;
        case "3":
            option3();
            break;
        case "4":
            option4();
            break;
        case "5":
            console.log("Saliendo del programa...");
            booleanito = false;
        default:
            console.log("Opcion no valida");
    }
}
