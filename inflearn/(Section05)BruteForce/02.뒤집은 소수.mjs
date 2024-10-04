import { data } from "./02.뒤집은 소수.input.mjs";
import { test } from "../../core/test.mjs";
import { isPrime } from "../../core/isPrime.mjs";

function reverse(num) {
  let ret = 0;
  while (num > 0) {
    ret = ret * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return ret;
}

// implement
function impl(len, iterable) {
  const ret = [];

  for (const it of iterable) {
    const reversed = reverse(it);
    if (isPrime(reversed)) {
      ret.push(reversed);
    }
  }

  return ret;
}

// output
console.log(test(impl, data));
