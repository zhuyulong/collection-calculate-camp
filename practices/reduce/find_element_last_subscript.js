'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var count = 0;
  for(var i = collection.length; i >=0; i--){
        if(collection[i] != element){
            count++;
        }else{
             break;
        }
  }
  return count;
}

module.exports = calculate_elements_sum;
