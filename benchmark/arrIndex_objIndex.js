var _ = require('underscore');

var arrayIndex = ['name', 'desc', 'note', 'title'];
var objectIndex = {name:true, desc:true, note:true, title:true};
var cmpObj = {name:1, desc:2, norelate1:11, note:3, title:4};

suite('arrIndex_objIndex', function () {
  bench('objectIndex', function () {
    _.each( cmpObj, function( v, k ){
      if( objectIndex[ k ] ) {
        // TODO
      }
    });
  })

  bench('arrayIndex', function () {
    _.each( cmpObj, function( v, k ){
      if( arrayIndex.indexOf( k ) !== -1 ) {
        // TODO
      }
    });
  })
})