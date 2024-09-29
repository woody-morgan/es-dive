import { data } from "./07.10부제.input.mjs";
import { test } from "../../core/test.mjs";
import { count } from "../../core/count.mjs";

// implement
function impl(day, input) {
  return count(input.filter((elem) => elem % 10 === day));
}

// output
console.log(test(impl, data));
