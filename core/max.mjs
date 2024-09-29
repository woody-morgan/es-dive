export function max(iterable) {
  let ret = 0;
  for (let it of iterable) {
    if (ret < it) {
      ret = it;
    }
  }

  return ret;
}
