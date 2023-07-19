//*** ESTRUCTURA DE UNA FUNCION RECURSIVA ***//
// function recursiva() {
//     if (/*Validacion*/) {
//         //llamados recursivos
//     } else {
//         //llamados normales, sin recursividad
//     }
// }

const numeritos = [0, 1, 12, 5, 2, 66, 54, 62, 58, 3, 6, 2, 5];

//*** FORMA TRADICIONAL ***/
// let numerito = 0;

// for (let index = 0; index < numeritos.length; index++) {
//   numerito = numeritos[index];
//   console.log({ index, numerito });
// }

//***RECURSIVIDAD ***//
function recursiva(numbersArray) {
  if (numbersArray.length != 0) {
    const firstNum = numbersArray[0];
    console.log(firstNum);
    numbersArray.shift(); //Se elimina la primera posicion del array para asi seguir iterando.
    recursiva(numbersArray);
  }
}
