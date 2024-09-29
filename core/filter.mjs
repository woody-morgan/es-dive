export function filter(iterable, by) {
  let filtered = [];
  for (let it of iterable) {
    if (by(it)) {
      filtered.push(it);
    }
  }
  return filtered;
}
