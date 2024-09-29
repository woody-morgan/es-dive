export function max(arr) {
  let ret = 0;
  for (let i = 0; i < arr.length; i++) {
    if (ret < arr[i]) {
      ret = arr[i];
    }
  }

  return ret;
}
