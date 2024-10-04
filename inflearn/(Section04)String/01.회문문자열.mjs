import { data } from "./01.회문문자열.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(input) {
  // const lower = input.toLowerCase();
  // for (let i = 0; i < Math.floor(lower.length / 2); i++) {
  //   if (lower[i] === lower[lower.length - 1 - i]) {
  //     continue;
  //   } else {
  //     return "NO";
  //   }
  // }
  const reversed = input.split("").reverse().join("");

  if (reversed.toLowerCase() === input.toLowerCase()) return "YES";
  else return "NO";
}

// output
console.log(test(impl, data));
