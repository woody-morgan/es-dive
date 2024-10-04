import { data } from "./02.팰린드롬.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(input) {
  const norm = input.toLowerCase().replace(/[^a-z]/g, "");
  // or
  // .split("")
  // .filter((ch) => (ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z"))
  // .join("")
  // .toLowerCase();

  for (let i = 0; i < Math.floor(norm.length / 2); i++) {
    if (norm[i] !== norm[norm.length - i - 1]) return "NO";
  }

  return "YES";
}

// output
console.log(test(impl, data));
