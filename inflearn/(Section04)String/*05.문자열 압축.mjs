import { data } from "./*05.문자열 압축.input.mjs";
import { test } from "../../core/test.mjs";

// implement
function impl(s) {
  if (s.length === 0) return "";

  // find new str
  // record index
  // find next str
  // when found calculate index distance
  // replace current str

  // let ret = "";
  // let ip = s;
  // while (ip !== "") {
  //   let i = 0;
  //   while (i !== ip.length) {
  //     if (ip[i] === ip[0]) i++;
  //     else break;
  //   }

  //   ret += ip[0];
  //   ret += i - 0 === 1 ? "" : (i - 0).toString();
  //   ip = ip.substring(i, ip.length);
  // }

  // return ret;

  let ret = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      ret += s[i];
      if (cnt > 1) ret += String(cnt);
      cnt = 1;
    }
  }

  return ret;
}

// output
console.log(test(impl, data));
