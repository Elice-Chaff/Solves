// Lv 2. 숫자의 표현
// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let count = 1;
  // 약수 개수 구하기
  for (var i = 2; i <= n; i++) {
    if (i % 2 === 1 && n % i === 0) {
      count++;
    }
  }
  return count;
}
