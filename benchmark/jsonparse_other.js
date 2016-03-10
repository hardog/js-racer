var roles = '["9","10","11","12"]',
	rolesSplit = '9,10,11,12';

suite('jsonparse_other', function () {
  bench('jsonparse', function () {
    var num = JSON.parse(roles);
  })

  bench('reg', function () {
    var num = roles.match(/\d+/g);
  })

  bench('split', function () {
    var num = rolesSplit.split(',');
  })
})

