import { data } from "./02.보이는 학생.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(len, input) {
  const ret = [];

  ret.push(input[0]);
  let max = input[0];

  for (let i = 1; i < input.length; i++) {
    if (max < input[i]) {
      max = input[i];
      ret.push(input[i]);
    }
  }

  console.log(ret);

  return ret.length;
}

// output
console.log(test(impl, data));
