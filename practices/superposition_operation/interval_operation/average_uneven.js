'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var number = [];

  for(var i = 0 ; i < collection.length; i++){
      if(collection[i] %2 !=0){
          number.push(collection[i]);
      }
  }

  var sum = 0;
  var aver = 0;

  for(var j = 0 ; j < number.length; j++){
      sum +=number[j];
  }
  aver = sum/number.length;
  return aver;
}

module.exports = average_uneven;
