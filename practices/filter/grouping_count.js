'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var _ =require('../lodash/collection');

 var array=_.countBy(collection, function(n) {
     return Math.floor(n);
    });
    return array;
}

module.exports = grouping_count;
