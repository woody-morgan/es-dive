import { data } from "./03.숫자만 추출.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(input) {
  let ret = 0;
  for (const it of input) {
    if (it >= "0" && it <= "9") {
      ret = ret * 10 + (it - "0");
    }
  }

  return ret;
}

// output
console.log(test(impl, data));
