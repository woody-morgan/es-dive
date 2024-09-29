export function sum(iterable) {
  let ret = 0;
  for (let it of iterable) {
    ret += it;
  }

  return ret;
}
