
// Pedir numero mediante prompt y sumarle otro numero en cada repeticion,realizando una salida por cada resultado.

let numberOne = Number(prompt('Ingrese un numero'));
let numberThree = Number(prompt('Ingrese la cantidad de numeros que quisera sumarle'))
let addition = numberOne;

for(let i=0 ; i < numberThree; i++){
    let numberTwo = Number(prompt('Ingrese otro numero para sumar'))
    addition += numberTwo

    console.log('El resultado es ' + addition);
}


// // Pedir un texto mediante prompt, concatenar un valor en cada repeticion, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

let textOne = prompt("Ingrese su nombre de usuario ");
let textTwo= "";
let fullSentence = '';

do{
    textTwo = prompt ("Ingrese, de a uno a la vez, el nombre de los productos que quisiera solicitar o ingrese ESC para finalizar")

    if(textTwo == "ESC"){
      alert('Gracias por enviar su solicitud.')
    }
    else{
       fullSentence = fullSentence + ' ' + textTwo ;
       console.log('Le usuario ' + textOne + ' solicita los siguientes productos : ' + fullSentence)
    }
   
}while(textTwo != "ESC")




// // Pedir un numero por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

// let numberOfRepetitions = Number(prompt('Ingrese la cantidad de veces que desea ver el mensaje'))

// for (let i = 0; i < numberOfRepetitions ; i++){

//     console.log("Hola")
// }


