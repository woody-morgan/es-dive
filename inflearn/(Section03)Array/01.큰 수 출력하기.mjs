import { data } from "./02.보이는 학생.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(len, input) {
  const newly = [-Infinity].concat(input);

  const ret = [];

  for (let i = 1; i < newly.length; i++) {
    const prev = newly[i - 1];
    const current = newly[i];

    if (prev < current) {
      ret.push(newly[i]);
    }
  }

  return ret;
}

// output
console.log(test(impl, data));
