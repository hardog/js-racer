var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var execSync = require('child_process').execSync;
var matchaCommand = path.join(__dirname, './node_modules/.bin/matcha');
var multiline = require('multiline');

var benchmarkDir = path.join(__dirname, 'benchmark');
var readmeTemplate = _.template(fs.readFileSync(path.join(__dirname, 'README.template'), 'utf-8'));
var readmeLocate = path.join(__dirname, 'README.md');

var allBenchmarks = fs.readdirSync(benchmarkDir);
allBenchmarks = allBenchmarks.filter(function (fileName) {
  return /\.js$/.test(fileName);
});

var benchmarkBlockTemplate = _.template(multiline(function () {
/*
[<%= filename %>](benchmark/<%= filename %>)

```
<%= result %>
```
*/
}));

var result = [];

allBenchmarks.forEach(function (fileName) {
  var output = execSync(matchaCommand + ' -R plain ./benchmark/' + fileName).toString();

  // remove unnecessary output
  output = output.split('\n');

  for(var i = 0; i < 5; i ++){
    output.pop();    
  }

  output = output.join('\n');
  // END remove unnecessary output

  result.push(benchmarkBlockTemplate({
    filename: fileName,
    result: output,
  }));
});

var readmeText = readmeTemplate({
  result: result.join('\n\n')
});

fs.writeFileSync(readmeLocate, readmeText);

