'use strict';

function amount_even(collection) {

  //在这里写入代码
  var number = [];

  for(var i = 0 ; i < collection.length; i++){
      if(collection[i] %2 ===0){
          number.push(collection[i]);
      }
  }

  var sum = 0;

  for(var j = 0 ; j < number.length; j++){
      sum +=number[j];
  }
  return sum;
}

module.exports = amount_even;
