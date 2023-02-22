// Lv 2. 피보나치 수
// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  var answer = 0;
  let fn_ = 1;
  let fn__ = 0;
  for (let i = 2; i <= n; i++) {
    answer = (fn__ + fn_) % 1234567;
    fn__ = fn_;
    fn_ = answer;
  }
  return answer;
}