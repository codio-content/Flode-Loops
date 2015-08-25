
var script = 'N-0.flode';

var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var random = Math.round(Math.random() * 90 + 10);
// handles 0 and 1 case
var expected = []

for(var i = 1; i < random; i++) {
  if(i % 2 == 0) expected.push(i);
}

// console.log(random)
// console.log(expected)

var out = testing.RunGraphWithInputs(script, [0]);
testing.RunGraphWithInputs(script, [1]);
testing.RunGraphWithInputs(script, [random]);

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out.length == expected.length) {
  for(var i = 0; i < expected.length; i++) {
    if(typeof out[i] == 'undefined' || out[i] != expected[i]) {
      console.log('Not quite right, make sure you are outputting every even number in the range excluding 0 and N');
      process.exit(1)
    }
  } 
 
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right, make sure you are handling all scenarios.')
process.exit(1)
