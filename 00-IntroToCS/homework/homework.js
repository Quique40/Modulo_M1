'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  //num es un string en este caso

  var numDec = 0;
  //var numArrInv = num.toString().split('').reverse();

  

  for(var i=0; i<num.length; i++){
    //numDec += (numArrInv[i])*(2**i);
    numDec += Math.pow(2,num.length-(i+1)) * num[i];
  }

  return numDec;


}

function DecimalABinario(num) {
  // tu codigo aca

  
  var numBin = [];

  do{
      numBin.unshift(num%2);
      num = Math.floor(num/2);
  }while(num!==0);

  return numBin.join('');

  }


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}