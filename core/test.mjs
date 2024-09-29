export function test(impl, data) {
  return data.map((td) => {
    const result = impl(...td["input"]);
    if (Array.isArray(result)) {
      result.sort((f, s) => (f < s ? -1 : 1));
      td["output"].sort((f, s) => (f < s ? -1 : 1));
      for (let i = 0; i < result.length; i++) {
        if (result[i] !== td["output"][i]) {
          return false;
        }
      }
      return true;
    } else {
      return impl(...td["input"]) === td["output"];
    }
  });
}
