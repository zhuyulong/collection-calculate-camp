'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var _ = require('../lodash/array');

  var array=_.intersection(collection_b,collection_a);

   return array;
}

module.exports = get_intersection;
