import { data } from "./*10.문자찾기.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(word, target) {
  return word.split(target).length - 1;
}

// output
console.log(test(impl, data));
