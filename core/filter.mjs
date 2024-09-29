export function filter(arr, by) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (by(arr[i])) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}
