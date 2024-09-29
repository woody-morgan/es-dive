import { data } from "./09.A를으로.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(input) {
  return input.replace(/A/g, "#");
}

// output
console.log(test(impl, data));
