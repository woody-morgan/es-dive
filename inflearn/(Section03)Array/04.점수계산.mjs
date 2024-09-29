import { data } from "./04.점수계산.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(len, iterable) {
  let x10 = 1;
  let ret = 0;

  for (let it of iterable) {
    if (it === 1) {
      ret += x10 * it;
      x10++;
      continue;
    }

    if (it === 0) {
      x10 = 1;
    }
  }

  return ret;
}

// output
console.log(test(impl, data));
