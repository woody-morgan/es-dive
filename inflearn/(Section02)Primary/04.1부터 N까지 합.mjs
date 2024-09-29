// implement
function impl(input) {
  let ret = 0;
  for (let i = 1; i <= input; i++) {
    ret += i;
  }
  return ret;
}

// input
const input = 6;

// output
console.log(impl(input));
