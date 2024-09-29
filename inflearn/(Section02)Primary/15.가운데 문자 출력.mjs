import { data } from "./15.가운데 문자 출력.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(input) {
  // 0일 때 예외처리
  if (input.length === 0) {
    return input;
  }

  const mid = Math.floor(input.length / 2);
  if (input.length % 2 == 0) {
    return input.substring(mid - 1, mid + 1);
  } else {
    return input[mid];
  }
}

console.log(test(impl, data));
