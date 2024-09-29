import { data } from "./07.봉우리.input.mjs";
import { test } from "../../core/test.mjs";

const dirX = [1, -1, 0, 0];
const dirY = [0, 0, 1, -1];

function isInRange(n, x, y) {
  // handle cannot
  if (x < 0 || x >= n || y < 0 || y >= n) return false;

  return true;
}

// implement
function impl(len, input) {
  let peak = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      let isBiggest = true;
      const centerValue = input[i][j];
      // 모든 방향 순회
      for (let k = 0; k < 4; k++) {
        const ny = dirY[k] + i;
        const nx = dirX[k] + j;

        if (isInRange(len, nx, ny)) {
          const nval = input[ny][nx];
          if (centerValue <= nval) {
            isBiggest = false;
            break;
          }
        }
      }
      if (isBiggest) {
        peak++;
      }
    }
  }

  return peak;
}

// output
console.log(test(impl, data));
