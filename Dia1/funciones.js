import * as campers from "./menus.js";
///fUNCIONES DE CAMPER///
///fUNCION DE INSCRIPCION///
export function inscripcion() {
  let datoscamp = campers.campers;
  let id = prompt("Ingrese su numero de documento");
  let nombre = prompt("Ingrese sus dos nombres");
  let apellido = prompt("Ingrese sus dos apellidos");
  let dir = prompt("ingrese la direccion de su vivienda");
  let acu = prompt("ingrese el nombre de su acudiente");
  let tel = prompt("ingrese su numero de telefono");
  let estado={
    "Aprobado": false,
    "Cursando": false,
    "En proceso de ingreso": false,
    "Expulsado": false,
    "Graduado": false,
    "Inscrito": true,
    "Retirado": false
  };
  datoscamp["Campers"].push({ 
    "ID": id, 
    "nombre": nombre, 
    "apellido":apellido, 
    "direccion":dir,
    "acudiente":acu,
    "telefono":tel,
    "estado":estado,
    "curso":""});
}
////fUNCION VER NOtAS////
export function vernotas(){
    let camp=campers.Rutas;
    let leng = Object.keys(camp).length;
    for (let i=0;i<leng;i++){
        let rut=prompt("dime tu ruta\n"+
                        "1.Java\n"+
                        "2.NodeJS\n"+
                        "3.NetCore\n"+
                        "EScribelo identico mayus y mins etc etc");
        let skill=prompt("ingrese la skill de la cual quiera ver las notas");
        let campid = parseInt(prompt("ingresa tu id para saber tus notas"));
        if ((camp[rut][skill][i]["ID"])==campid){
            alert("Nota Proyecto: " + camp[rut][skill][i]["Notas"]["notaProyecto"]+"\n"+
                  "Nota filtro: " + camp[rut][skill][i]["Notas"]["notafiltro"]+"\n"+
                  "Nota trabajos: " + camp[rut][skill][i]["Notas"]["notatrabajos"]+"\n"+
                  "Nota final: " + camp[rut][skill][i]["Notas"]["notafinal"]);
            break;
        };
    }
}
/////fUNCIONES DE TRAINER/////
export function vernotastrai(){
  let camp=campers.Rutas;
  let leng = Object.keys(camp).length;
  for (let i=0;i<leng;i++){
      let rut=prompt("cual es la ruta\n"+
                      "1.Java\n"+
                      "2.NodeJS\n"+
                      "3.NetCore\n"+
                      "Escribelo identico mayus y mins etc etc");
      let skill=prompt("ingrese la skill de la cual quiera ver las notas");
      let campid = parseInt(prompt("ingresa el id del estudiante para ver las notas"));
      if ((camp[rut][skill][i]["ID"])==campid){
          alert("Nota Proyecto: " + camp[rut][skill][i]["Notas"]["notaProyecto"]+"\n"+
                "Nota filtro: " + camp[rut][skill][i]["Notas"]["notafiltro"]+"\n"+
                "Nota trabajos: " + camp[rut][skill][i]["Notas"]["notatrabajos"]+"\n"+
                "Nota final: " + camp[rut][skill][i]["Notas"]["notafinal"]);
          break;
      };
  }
}
///////fUNCION PARA EDITAR NOTAS DE CAMPERS///////
export function editarnota(){
    let camp=campers.Rutas;
    let SelRuta = prompt("Ingrese qué ruta tiene su grupo: ");
    if (SelRuta in camp){
        let SelecSkill = prompt("¿Qué skill desea editar?");
        if (SelecSkill in camp["Java"]){
        let notaedit=prompt("ingrese la nota que desea editar:\n"+
                            "notaFinal\n"+
                            "notaProyecto\n"+
                            "notaFiltro\n"+
                            "notaTrabajos\n"+
                            "por favor escribalo tal cual"
        );
        let NuevaNota = parseInt(prompt("Ingrese la nueva nota: "));
        camp[SelRuta][SelecSkill][notaedit]=NuevaNota;
        }
        else{
        alert("escriba bien")
    }
    }
    else {
        alert("Ruta no encontrada")
    }
}
///////fUNCION PARA VER CAMPERS///////
///////TAMBIEN USADO POR CORDINADORA/////////
export function verestudiantes(){
    let camp=campers.Rutas
    let SelRuta = prompt("Ingrese qué ruta tiene su grupo: ")
    let leng = Object.keys(camp).length;
    for (let i=0;i<leng;i++){
        alert("\nNombre estudiante: #"+i+1+ camp[SelRuta]["Intro"][i]["nombre"]+"\n"+
              "Identificacion: "+ camp[SelRuta]["Intro"][i]["ID"]+"\n"+
              "========================================================================")
}}
//////fUNCIONES CORDINADORA///////
///////fUNCION PARA AGREGAR CAMPERS//////
export function aggcamper(){
    let camp=campers.campers
    let id= parseInt(prompt("Ingrese el documento de identidad del nuevo Camper"));
    let name=prompt("Ingrese el nombre del camper nuevo ");
    let apellido= prompt("Ingrese los apellidos del camper");
    let dir= prompt("Ingrese la direccion del estudiante");
    let acu= prompt("Ingrese nombre del acudiente");
    let cel= prompt("Ingrese el numero de telefo no del estudiante");
    let fecha_inicio= prompt("Ingrese la fecha de inicio del camper");
    let fecha_fin= prompt("Ingrese la fecha de finalizacion del camper");
    let estado={
                "Aprobado": false,
                "Cursando": false,
                "En proceso de ingreso": false,
                "Expulsado": false,
                "Graduado": false,
                "Inscrito": true,
                "Retirado": false
            };
    camp["Campers"].push({"ID":id,
                            "nombre":name,
                            "apellido":apellido,
                            "direccion":dir,
                            "acudientes":acu,
                            "#celular":cel,
                            "Estado":estado,
                            "Curso":"",
                            "Riesgo": "",
                            "notainicial": Math.floor(Math.random() * 100) + 1,
                            "fechaInicio": fecha_inicio,
                            "fechafin": fecha_fin
});
}
////////fUNCION PARA EDItAR DAtOS DE CAMPERS//////
export function editcamper(){
    let bo=true;
    let camp=campers.campers;
    let E = parseInt(prompt("¿A qué estudiante quiere editar?"));
    let ed= parseInt(prompt(
    "Que quiere editar?\n"+
    "(1). ID\n"+
    "(2). Nombre\n"+
    "(3). Apellido\n"+
    "(4). Dieccion\n"+
    "(5). Acudiente\n"+
    "(6). #celular\n"+
    "(7). Estado\n"+
    "(8). Curso"));
    if (ed==1){
        let identi=prompt("Ingrese el nuevo ID");
        camp["Campers"][E-1]["ID"]=identi;
    }
    else if (ed==2){
        let name= prompt("Ingrese el nuevo Nombre(Nombres)");
        camp["Campers"][E-1]["nombre"]=name;
    }
    else if (ed==3){
        let apll= prompt("Ingrese el nuevo Apellido(Apellidos)");
        camp["Campers"][E-1]["apellido"]=apll;
    }
    else if (ed==4){
        let direc= prompt("Ingrese la nueva direccion");
        camp["Campers"][E-1]["direccion"]=direc;
    }
    else if (ed==5){
        let acud= prompt("Ingrese el nuevo Nombre del acudiente(Nombres)");
        camp["Campers"][E-1]["nombre"]=acud;
    }
    else if (ed==6){
        print()
        let celul= prompt("Ingrese el nuevo #Celular");
        camp["Campers"][E-1]["#celular"]=celul;
    }
    else if (ed==8){
        let cur=prompt("Ingrese el nuevo curso");
        camp["Camper"][E-1]["Curso"]=cur;
    };
    if (ed==7){
        bo=false;
        alert("Ingrese el nuevo Estado\n");
        alert(
            "(1). Aprobado\n"+
            "(2). Cursando\n"+
            "(3). En proceso de ingreso\n"+
            "(4). Expulsado\n"+
            "(5). Graduado\n"+
            "(6). Inscrito\n"+
            "(7). Retirado\n"
            )};
    while (bo==false){
            let estad=prompt();
            if (estad==1){
                camp["Campers"][E-1]["Estado"]["Aprobado"]=true;
                camp["Campers"][E-1]["Estado"]["Cursando"]=false;
                camp["Campers"][E-1]["Estado"]["En proceso de ingreso"]=false;
                camp["Campers"][E-1]["Estado"]["Expulsado"]=false;
                camp["Campers"][E-1]["Estado"]["Graduado"]=false;
                camp["Campers"][E-1]["Estado"]["Inscrito"]=false;
                camp["Campers"][E-1]["Estado"]["Retirado"]=false;
                bo=true;
                }
            else if (estad==2){
                camp["Campers"][E-1]["Estado"]["Aprobado"]=false;
                camp["Campers"][E-1]["Estado"]["Cursando"]=true;
                camp["Campers"][E-1]["Estado"]["En proceso de ingreso"]=false;
                camp["Campers"][E-1]["Estado"]["Expulsado"]=false;
                camp["Campers"][E-1]["Estado"]["Graduado"]=false;
                camp["Campers"][E-1]["Estado"]["Inscrito"]=false;
                camp["Campers"][E-1]["Estado"]["Retirado"]=false;
                bo=true;
                
            }
            else if (estad==3){
                camp["Campers"][E-1]["Estado"]["Aprobado"]=false;
                camp["Campers"][E-1]["Estado"]["Cursando"]=false;
                camp["Campers"][E-1]["Estado"]["En proceso de ingreso"]=true;
                camp["Campers"][E-1]["Estado"]["Expulsado"]=false;
                camp["Campers"][E-1]["Estado"]["Graduado"]=false;
                camp["Campers"][E-1]["Estado"]["Inscrito"]=false;
                camp["Campers"][E-1]["Estado"]["Retirado"]=false;
                bo=true;
                
            }
            else if (estad==4){
                camp["Campers"][E-1]["Estado"]["Aprobado"]=false;
                camp["Campers"][E-1]["Estado"]["Cursando"]=false;
                camp["Campers"][E-1]["Estado"]["En proceso de ingreso"]=false;
                camp["Campers"][E-1]["Estado"]["Expulsado"]=true;
                camp["Campers"][E-1]["Estado"]["Graduado"]=false;
                camp["Campers"][E-1]["Estado"]["Inscrito"]=false;
                camp["Campers"][E-1]["Estado"]["Retirado"]=false;
                bo=true;
                }
            else if (estad==5){
                camp["Campers"][E-1]["Estado"]["Aprobado"]=false;
                camp["Campers"][E-1]["Estado"]["Cursando"]=false;
                camp["Campers"][E-1]["Estado"]["En proceso de ingreso"]=false;
                camp["Campers"][E-1]["Estado"]["Expulsado"]=false;
                camp["Campers"][E-1]["Estado"]["Graduado"]=true;
                camp["Campers"][E-1]["Estado"]["Inscrito"]=false;
                camp["Campers"][E-1]["Estado"]["Retirado"]=false;
                bo=true;
                }
            else if (estad==6){
                camp["Campers"][E-1]["Estado"]["Aprobado"]=false;;
                camp["Campers"][E-1]["Estado"]["Cursando"]=false;;
                camp["Campers"][E-1]["Estado"]["En proceso de ingreso"]=false;
                camp["Campers"][E-1]["Estado"]["Expulsado"]=false;;
                camp["Campers"][E-1]["Estado"]["Graduado"]=false;;
                camp["Campers"][E-1]["Estado"]["Inscrito"]=true;;
                camp["Campers"][E-1]["Estado"]["Retirado"]=false;;
                bo=true;;
                }
            else if (estad==7){
                camp["Campers"][E-1]["Estado"]["Aprobado"]=false;
                camp["Campers"][E-1]["Estado"]["Cursando"]=false;
                camp["Campers"][E-1]["Estado"]["En proceso de ingreso"]=false;
                camp["Campers"][E-1]["Estado"]["Expulsado"]=false;
                camp["Campers"][E-1]["Estado"]["Graduado"]=false;
                camp["Campers"][E-1]["Estado"]["Inscrito"]=false;
                camp["Campers"][E-1]["Estado"]["Retirado"]=true;
                bo=true;
                }
            else{
                print("El estado que ingreso es incorrecto")
                bo=false;}
            }
}
///////FUNCION ELIMINAR CAMPER///////////////////////
export function eliminarcamper(){
    let camperid = prompt("Ingresa el id del camper que quieres eliminar");
    let camp=campers.campers;
    let leng = Object.keys(camp).length;
    for (let i=0;i>leng;i++){
        if ((camp["Campers"][i]["ID"])=camperid){
            camp["Campers"].splice(1,i)
            break;
        };
    };
}
/////////FUNCION PARA AGREGAR CAMPER A CURSO///////
export function CAMPERcurso(){
    
}