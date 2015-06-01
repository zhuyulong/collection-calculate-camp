'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var array = [];
  for(var i = 0; i < collection.length; i++){
      if(collection[i] %2 === 0){
          array.push(collection[i]);
      }
  }

  var array_1 = [];

  for(var j = 0; j < array.length; j++){
      array_1.push(String.fromCharCode(array[j]+96));
  }
  return array_1;
}

module.exports = even_to_letter;
