'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var _ = require('../lodash/array');
  var array= _.flatten(collection);

  return array;
}

module.exports = double_to_one;
