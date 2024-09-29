import { data } from "./13.대문자로 변환.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(input) {
  let ret = "";

  for (let it of input) {
    if (it === it.toUpperCase()) {
      // 대문자
      ret += it.toLowerCase();
    } else {
      // 소문자
      ret += it.toUpperCase();
    }
  }

  return ret;
}

// output
console.log(test(impl, data));
