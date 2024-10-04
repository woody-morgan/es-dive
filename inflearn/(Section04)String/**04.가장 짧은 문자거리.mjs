import { data } from "./**04.가장 짧은 문자거리.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(s, t) {
  // const ret = Array.from({
  //   length: s.length,
  // }).fill(999999999);
  // const ePos = [];
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === t) {
  //     ePos.push(i);
  //   }
  // }
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === t) {
  //     ret[i] = 0;
  //     continue;
  //   }
  //   for (let j = 0; j < ePos.length; j++) {
  //     ret[i] = Math.min(ret[i], Math.abs(i - ePos[j]));
  //   }
  // }
  // return ret;

  const ret = [];
  let p = 99999;
  for (const it of s) {
    if (it === t) {
      p = 0;
      ret.push(p);
    } else {
      p++;
      ret.push(p);
    }
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
      ret[i] = Math.min(ret[i], p);
    } else {
      p++;
      ret[i] = Math.min(ret[i], p);
    }
  }

  return ret;
}

// output
console.log(test(impl, data));
