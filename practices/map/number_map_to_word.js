'use strict';
var number_map_to_word = function(collection){
    var _ = require('../lodash/array');

    var array=[];

    for(var i=0; i<collection.length; i++){
        array.push(String.fromCharCode(i+97));
    }
     return array;
}

module.exports = number_map_to_word;
