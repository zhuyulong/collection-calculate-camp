'use strict';

function grouping_count(collection) {

  //在这里写入代码
//   var _ =require('../lodash/collection');
// var array=_.countBy(collection, function(n) {
//      return Math.floor(n);
//     });
//     return array;
    var array = {};

    for(var i = 0; i < collection.length; i++){
        array[collection[i]] = array[collection[i]] ||0;
        array[collection[i]]++;
        }
    return array;
}

module.exports = grouping_count;
