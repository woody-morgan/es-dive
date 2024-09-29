import { data } from "./08.일곱 난쟁이.input.mjs";
import { sum } from "../../core/sum.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(input) {
  const summed = sum(input);
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const calc = summed - input[i] - input[j];
      if (calc === 100) {
        // could be answer
        return input.filter((_, idx) => idx !== i && idx !== j);
      }
    }
  }

  throw new Error("input is invalid");
}

// output
console.log(test(impl, data));
