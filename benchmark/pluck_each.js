var _ = require('underscore');

var role = [{
  name: 'hello'
},{
  name: 'hello2'
},{
  name: 'hello3'
}];

suite('pluck_each', function () {
  bench('pluck', function () {
      var roleList = [];
      roleList = _.pluck(role, 'name');
  })

  bench('each', function () {
      var roleList = [];
      _.each(role, (v) => roleList.push(v.name));
  })
})