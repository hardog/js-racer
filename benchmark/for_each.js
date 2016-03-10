var _ = require('underscore');
var roles = [
{
    gp:'[1,2,3]'
},
{
    gp:'[4,5,6]'
}
];

suite('for_each', function () {
  bench('_.each', function () {
    var len = roles.length;
    _.each(roles, function(v, k){
        v.gp;
    });
  })

  bench('for', function () {
    var len = roles.length;
    for(var i = 0; i < len; i ++){
        roles[i].gp;
    }
  })
})

