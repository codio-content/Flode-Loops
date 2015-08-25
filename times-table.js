
var script = 'times-table.flode';

var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var random = Math.round(Math.random() * 18 + 2);
var expected = [];

for(var i = 1; i < 12; i++) {
  expected.push(i * random);
}

console.log(random)
console.log(expected)

var out = testing.RunGraphWithInputs(script, [random]);

console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out.length == expected.length) {
  for(var i = 0; i < expected.length; i++) {
    if(typeof out[i] == 'undefined' || out[i] != expected[i]) {
      console.log('Not quite right, make sure you are outputting the times table from 1 to 12');
      process.exit(1)
    }
  } 
 
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right, make sure you are outputting only 12 numbers.')
process.exit(1)
