import { data } from "./05.K번째 큰 수.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(n, k, iterable) {
  let prev = -1;
  let remain = k;

  // 또는 Set을 써도 됨
  const sorted = iterable.sort((f, s) => s - f);
  for (let i = 0; i < sorted.length - 2; i++) {
    for (let j = i + 1; j < sorted.length - 1; j++) {
      for (let k = j + 1; k < sorted.length; k++) {
        const latest = sorted[i] + sorted[j] + sorted[k];
        if (prev === latest) {
          continue;
        }

        prev = latest;
        remain--;

        if (remain === 0) {
          return sorted[i] + sorted[j] + sorted[k];
        }
      }
    }
  }

  return -1;
}

// output
console.log(test(impl, data));
