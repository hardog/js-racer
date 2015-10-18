var filename = 'benchmark.js';

suite('split_str', function () {
  bench('replace', function () {
    var name = filename.replace(/\.js/, '');
  })

  bench('split', function () {
    var name = filename.split('.')[0];
  })

  bench('substring', function () {
    var name = filename.substring(0, filename.lastIndexOf('.'));
  })
})

