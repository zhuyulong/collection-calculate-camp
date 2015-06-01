'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var number = [];

  for(var i = 0; i < collection.length; i++){
      if(collection[i] %2 != 0){
          number.push(collection[i]);
      }
  }

  var number_1 = [];
  var sum = 0;

  for(var j = 0; j < number.length; j++){
      number_1.push(number[j] *3 +5);
  }
  for(var k = 0 ; k < number_1.length; k++){
      sum += number_1[k];
  }
  return sum;
}

module.exports = hybrid_operation_to_uneven;
