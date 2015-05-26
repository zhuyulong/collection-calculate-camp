'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var _ = require('../lodash/array');
  
  var array=_.uniq(collection);

  return array;
}

module.exports = choose_no_repeat_number;
