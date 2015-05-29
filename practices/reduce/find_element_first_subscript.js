'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var count = 0;

  for(var i = 0; i < collection.length; i++){
      if(element != collection[i]){
          count++;
      }else{
          break;
      }
  }
  return count;
}

module.exports = calculate_elements_sum;
