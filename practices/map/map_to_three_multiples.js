'use strict';
var map_to_three_multiples = function(collections){
   //
   //  var _ = require('../lodash/collection');
   //     return _.map(collections,timesThree);
   // }
   //       function timesThree(n) {
   //           return n * 3;
   var array = [];

   for(var i = 0; i < collections.length; i++){
       array.push(collections[i] * 3);
   }
   return array;
}

module.exports = map_to_three_multiples;
