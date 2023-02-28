// Lv 1. 콜라문제
// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let answer = 0;
  while (a <= n) {
    let exchange = Math.floor(n / a) * b;
    n = n - (exchange / b) * a + exchange;
    answer += exchange;
  }
  return answer;
}
