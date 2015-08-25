
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var script = 'squared.flode';

var random = Math.round(Math.random() * 19 + 1);
var expected = 0;

for(var i = 0; i <= random; i++) {
  expected += i * i;
}

console.log(random)
console.log(expected)

var out = testing.RunGraphWithInputs(script, [random]);

console.log(out)

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
