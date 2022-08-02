/*
Preguntar sus notas y darle un promedio,tambien le dice si aprobo el cuatrimestre o no.
*/

function calcularPromedio(){
let pruebaUno=parseInt(prompt("Caunto te sacaste en el primer parcial? "));
let pruebaDos=parseInt(prompt("Cuanto te sacaste en el segundo parcial? "));
let final=parseInt(prompt("Cuanto te sacaste en el final? "));
let promedio=("Tu promedio en base a esto seria ",(pruebaUno+pruebaDos+final)/3);
alert("Tu promedio seria "+ promedio);

    
if(promedio<6){
    alert("Desafortunadamente desaprobaste el cautrimestre");
}
else{
    alert("Felicidades aprobaste el cautrimestre");
}
}

calcularPromedio();

