import { data } from "./*04.졸업 선물.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(n, m, iterable) {
  let ret = 0;
  iterable.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    let money = m - (iterable[i][0] / 2 + iterable[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && iterable[j][0] + iterable[j][1] > money) break;
      if (j !== i && iterable[j][0] + iterable[j][1] <= money) {
        money -= iterable[j][0] + iterable[j][1];
        cnt++;
      }
    }

    ret = Math.max(ret, cnt);
  }

  return ret;
}

// output
console.log(test(impl, data));
