// Lv.1 크기가 작은 부분문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  let answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    t.slice(i, i + p.length) <= +p ? answer++ : '';
  }
  return answer;
}
