
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var random = Math.round(Math.random() * 90 + 10);

// handles 0 and 1 case
var expected = [0, 1, 0];

for(var i = random; i >=0; i--) {
 expected.push(i); 
} 

// console.log(random)
// console.log(expected)

var out = testing.RunGraphWithInputs('N-0.flode', [0]);
testing.RunGraphWithInputs('N-0.flode', [1]);
testing.RunGraphWithInputs('N-0.flode', [random]);

console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out.length == expected.length) {
  for(var i = 0; i < expected.length; i++) {
    if(typeof out[i] == 'undefined' || out[i] != expected[i]) {
      console.log('Not quite right, make sure you are outputting every positive number in the range including 0.')
      process.exit(1)
    }
  } 
 
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right, make sure you are handling all scenarios.')
process.exit(1)
