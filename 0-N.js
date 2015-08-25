
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var random = Math.round(Math.random() * 90 + 10);
// console.log(random)

var out = testing.RunGraphWithInputs('0-N.flode', [0]);
testing.RunGraphWithInputs('0-N.flode', [1]);
testing.RunGraphWithInputs('0-N.flode', [random]);

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

// handles 0 case
if(out.length == random + 1) {
  var one = out[0] == 0;

  for(var i = 1; i < random + 1; i++) {
    if(typeof out[i] == 'undefined' || out[i] != i - 1) {
      console.log('Not quite right, make sure you are outputting every number in the range.')
      process.exit(1)
    }
  }
 
  if(one) {
    console.log('Well done!')
    process.exit(0)    
  }
}

console.log('Not quite right, make sure you are handling all scenarios.')
process.exit(1)
