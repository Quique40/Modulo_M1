'use strict'

const { merge } = require("@11ty/eleventy/src/TemplateData");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  
    if(array.length < 1){
        return [];
    }

    var left = [];
    var right = [];

    var pivot = array[0];

    for(let i=1; i<array.length; i++){
        if(array[i]<pivot){
         left.push(array[i]);   
        }else right.push(array[i]);
    }
    array = [].concat(quickSort(left), pivot, quickSort(right));
    return array;

}

function split(array){

  let mitad = Math.floor(array.length/2);
  
  let left = array.slice(0, mitad);
  let right = array.slice(mitad);

  return [left, right];

}


function Merge(left, right){

  let leftIndex = 0;
  let rightIndex = 0;

  let array = [];

  while(leftIndex < left.length && rightIndex < right.length){

    if(left[leftIndex]<right[rightIndex]){
      array.push(left[leftIndex]);
      leftIndex++;
    }else{
      array.push(right[rightIndex]);
      rightIndex++;
    }

  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length === 1) return array;
  
  let div = split(array);

  let left = div[0];
  let right = div[1];

  return Merge(mergeSort(left), mergeSort(right))

}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
