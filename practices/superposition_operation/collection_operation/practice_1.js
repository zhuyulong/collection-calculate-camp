'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var number = [];
  var sum = 0;

  for(var i = 0; i < collection.length; i++){
      number.push(collection[i] *3 +2);
  }
  for(var j = 0; j < number.length; j++){
      sum += number[j];
  }
  return sum;
}
module.exports = hybrid_operation;
