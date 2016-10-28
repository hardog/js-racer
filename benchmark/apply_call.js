var _ = require('underscore');
var fn1 = function(a){
  return a;
};
var fn2 = function(a, b){
  return a + b;
};
var fn3 = function(a, b, c){
  return a + b + c;
};

suite('apply_call', function () {
  bench('apply - 1 args', function () {
    fn1.apply(null, [1]);
  })

  bench('call - 1 args', function () {
    fn1.call(null, 1);
  })

  bench('apply - 2 args', function () {
    fn2.apply(null, [1, 2]);
  })

  bench('call - 2 args', function () {
    fn2.call(null, 1, 2);
  })

  bench('apply - 3 args', function () {
    fn3.apply(null, [1, 2, 3]);
  })

  bench('call - 3 args', function () {
    fn3.call(null, 1, 2, 3);
  })
})

