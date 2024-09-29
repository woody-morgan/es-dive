import { data } from "./12.대문자로 통일.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(input) {
  return input.toUpperCase();
}

// output
console.log(test(impl, data));
