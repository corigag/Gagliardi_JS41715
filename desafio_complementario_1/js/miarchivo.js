
// Pedir numero mediante prompt y sumarle otro numero en cada repeticion,realizando una salida por cada resultado.

let numberOne = Number(prompt('Ingrese un numero'))

for(let i=0 ; i < 3; i++){
    let numberTwo = Number(prompt('Ingrese otro numero'))
    let addition = numberOne + numberTwo

    console.log('El resultado de ' + numberOne + ' + ' + numberTwo + ' es: ' + addition);
}


// Pedir un texto mediante prompt, concatenar un valor en cada repeticion, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

let textOne = prompt("Ingrese su nombre ");
let textTwo= "";

do{
    textTwo = prompt ("Ingrese un pais que quisiera conocer o escriba ESC para salir")

    if(textTwo == "ESC"){
      alert('Gracias por participar.')
    }
    else{
       console.log(textOne + ' quisiera viajar a ' + textTwo + '.')
    }
   
}while(textTwo != "ESC")




// Pedir un numero por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

let numberOfRepetitions = Number(prompt('Ingrese la cantidad de veces que desea ver el mensaje'))

for (let i = 0; i < numberOfRepetitions ; i++){

    console.log("Hola")
}


