'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var _ =require('../lodash/array');
  
  var array=_.flatten(collection);
  var result=_.union(array);

  return result;
}

module.exports = double_to_one;
