'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var lastodd = 0;
  for(var i = 0 ; i < collection.length; i++){
      if(collection[i] %2 === 0){
          lastodd = collection[i];
      }
  }
  return lastodd;
}
module.exports = find_last_even;
