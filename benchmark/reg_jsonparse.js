var roles = '["9","10","11","12"]';

suite('reg_vs_jsonparse', function () {
  bench('jsonparse', function () {
    var num = JSON.parse(roles);
  })

  bench('reg', function () {
    var num = roles.match(/\d+/g);
  })
})

