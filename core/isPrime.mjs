export function isPrime(num) {
  if (num < 2) return false;

  //7 -> sqrt(7) === 2 => not 1, from 2
  // 100 -> sqrt(100) === 10 => 2 ~ 10, 2로 나누면 0이 나옴
  // 9 -> sqrt(9) === 3 => 2 ~ 3, 3으로 나누면 0이 나옴
  // 11 -> sqrt(11) === 3 => 2,3, 어떤 것도 0이 나오지 않음

  for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
