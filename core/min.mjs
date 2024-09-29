export function min(iterable) {
  let ret = Infinity;
  for (let it of iterable) {
    if (ret > it) {
      ret = it;
    }
  }
  return ret;
}

export function internal_min(arr) {
  return Math.min(...arr);
}
