'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var odd = 0;
  for(var i = 0 ; i < collection.length; i++){
      if(collection[i] %2 === 0){
          odd = collection[i];
          break;
      }
  }
  return odd;
}

module.exports = find_first_even;
