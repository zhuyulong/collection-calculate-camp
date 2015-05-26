'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var _ = require('../lodash/array');
  var array=_.xor(collection_a,collection_b);

  return array;
}

module.exports = choose_no_common_elements;
