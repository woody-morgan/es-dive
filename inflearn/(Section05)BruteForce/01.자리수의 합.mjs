import { data } from "./01.자리수의 합.input.mjs";
import { test } from "../../core/test.mjs";

function retSum(fig) {
  let ret = 0;
  while (fig > 0) {
    ret += fig % 10;
    fig = Math.floor(fig / 10);
  }
  return ret;
}

// implement
function impl(len, iterable) {
  let ret = 0;
  let retSumMax = -999999999;

  for (const it of iterable) {
    const itRetSum = retSum(it);

    if (retSumMax < itRetSum) {
      retSumMax = itRetSum;
      ret = it;
      continue;
    }

    if (retSumMax == itRetSum && ret < it) {
      ret = it;
      continue;
    }
  }

  return ret;
}

// output
console.log(test(impl, data));
