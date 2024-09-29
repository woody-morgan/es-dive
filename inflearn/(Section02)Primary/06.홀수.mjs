import { min } from "../../core/min.mjs";
import { filter } from "../../core/filter.mjs";

// implement
function impl(input) {
  return min(filter(input, (elem) => elem % 2 == 1));
}

// input
const input = [12, 77, 38, 41, 53, 92, 85];

// output
console.log(impl(input));
