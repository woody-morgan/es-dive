import { data } from "./*05.등수구하기.input.mjs";
import { test } from "../../core/test.mjs";

// implement
// function impl(len, iterable) {
//   const sorted = iterable.concat([]).sort((a, b) => b - a);

//   let dup = 1;
//   const rank = [1];

//   for (let i = 1; i < sorted.length; i++) {
//     const prev = sorted[i - 1];
//     const cur = sorted[i];

//     if (prev === cur) {
//       dup++;
//       rank.push(rank[i - 1]);
//       continue;
//     }

//     //  무조건 낮음
//     rank.push(rank[i - 1] + dup);
//     dup = 1;
//   }

//   const ret = [];

//   // sorted + rank
//   for (let it of iterable) {
//     ret.push(rank[sorted.indexOf(it)]);
//   }
//   console.log(ret);

//   return ret;
// }

function impl(len, iterable) {
  const ret = [];
  for (let i = 0; i < iterable.length; i++) {
    let count = 1;
    for (let j = 0; j < iterable.length; j++) {
      if (iterable[i] < iterable[j]) {
        count++;
      }
    }
    ret.push(count);
  }

  return ret;
}

// output
console.log(test(impl, data));
