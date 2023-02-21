// Lv 2. 피보나치 수
// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  let first = 0;
  if (n === 0) {
    return first;
  }
  let second = 1;
  let third = 1;
  for (let i = 2; i < n; i++) {
    first = second % 1234567;
    second = third % 1234567;
    third = (first + second) % 1234567;
  }
  return third;
}
