import { data } from "./*11.대문자 찾기.input.mjs";
import { test } from "../../core/test.mjs";

function isBig(char) {
  return char === char.toUpperCase();
}

// implement
function impl(input) {
  let ret = 0;
  for (let it of input) {
    if (isBig(it)) {
      ret++;
    }
  }

  return ret;
}

// output
console.log(test(impl, data));
