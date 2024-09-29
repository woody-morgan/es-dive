export function count(iterable) {
  let ret = 0;
  for (let _ of iterable) {
    ret++;
  }
  return ret;
}
