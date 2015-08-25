
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var script = 'xy.flode';

var x = Math.round(Math.random() * 9 + 1);
var y = Math.round(Math.random() * 11 + 1);
var expected = Math.pow(x, y);

// console.log(x)
// console.log(y)
// console.log(expected)

var out = testing.RunGraphWithInputs(script, [x, y]);

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out[0] == expected) {
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right.')
process.exit(1)
