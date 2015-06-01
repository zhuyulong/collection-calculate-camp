'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var number = 0;
  var sum = 0;
  var aver;

  for(var i = 0 ; i < collection.length; i++){
        sum += collection[i];
  }
  aver = parseInt(sum/collection.length);
  number =String.fromCharCode(aver+97);
  return number;
}

module.exports = average_to_letter;
