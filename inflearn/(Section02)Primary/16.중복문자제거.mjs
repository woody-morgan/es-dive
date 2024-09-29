import { data } from "./16.중복문자제거.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(input) {
  let ret = "";

  for (let i = 0; i < input.length; i++) {
    const res = input.indexOf(input[i]);
    if (res !== i) continue;

    ret += input[i];
  }

  return ret;
}

console.log(test(impl, data));
