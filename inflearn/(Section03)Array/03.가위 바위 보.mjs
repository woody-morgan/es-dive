import { data } from "./03.가위 바위 보.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(len, a, b) {
  const ret = [];
  for (let i = 0; i < len; i++) {
    const res = a[i] - b[i];

    if (res === 0) {
      ret.push("D");
      continue;
    }

    if (res === 1 || res === -2) {
      ret.push("A");
      continue;
    }

    if (res === -1 || res === 2) {
      ret.push("B");
      continue;
    }
  }

  return ret;
}

// output
console.log(test(impl, data));
