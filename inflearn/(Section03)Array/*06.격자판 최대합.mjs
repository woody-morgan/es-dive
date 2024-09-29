import { data } from "./*06.격자판 최대합.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(iterable2D) {
  let max = -Infinity;
  let sum1 = 0;
  let sum2 = 0;
  const n = iterable2D.length;

  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += iterable2D[i][j];
      sum2 += iterable2D[j][i];
    }

    max = Math.max(max, sum1, sum2);
  }

  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += iterable2D[i][i];
    sum2 += iterable2D[i][n - i - 1];
  }

  max = Math.max(max, sum1, sum2);

  return max;
}

// output
console.log(test(impl, data));
