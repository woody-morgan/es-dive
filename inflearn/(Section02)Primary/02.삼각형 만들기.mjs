import { filter } from "../../core/filter.mjs";
import { sum } from "../../core/sum.mjs";
import { max } from "../../core/max.mjs";

function canMakeTriangle(byun) {
  // 가장 큰거 1개 구하고
  // 나머지 2개를 더한다음에
  // 2개를 더한게 가장 큰 1개 보다 커야한다

  const large = max(byun);
  const rest = filter(byun, (item) => item !== large);

  if (sum(rest) > large) {
    return true;
  }

  return false;
}

// input
const input = [13, 33, 17];

// output
console.log(canMakeTriangle(input));
