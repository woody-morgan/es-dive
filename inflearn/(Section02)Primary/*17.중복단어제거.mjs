import { data } from "./*17.중복단어제거.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(_, input) {
  const ret = input.filter((elem, i) => input.indexOf(elem) === i);

  return ret;
}

console.log(test(impl, data));
