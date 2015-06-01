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

  for(var j = 0; j < number.length; j++){
      number_1.push(number[j] *3 +2);
  }
  return number_1;
}

module.exports = hybrid_operation_to_uneven;
