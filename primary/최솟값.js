const maxInf = 10000000;

function calcMin(arr) {
  let min = maxInf;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

console.log(calcMin([6, 5, 11]));
