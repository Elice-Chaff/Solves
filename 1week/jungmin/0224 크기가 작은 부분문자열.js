// Lv 1. 크기가 작은 부분문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  let pLen = p.length;
  let count = 0;
  for (let i = 0; i <= t.length - pLen; i++) {
    let newT = t.slice(i, i + pLen);
    if (Number(p) >= Number(newT)) {
      count++;
    }
  }
  return count;
}
