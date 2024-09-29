import { data } from "./14.가장 긴 문자열.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(len, input) {
  let ret = "";
  for (let i = 0; i < len; i++) {
    if (ret.length < input[i].length) {
      ret = input[i];
    }
  }

  return ret;
}

// output
console.log(test(impl, data));
