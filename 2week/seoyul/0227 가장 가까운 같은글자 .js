// Lv.1 가장 가까운 같은글자
// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  let answer = [];
  for (let i = s.length - 1; i > 0; i--) {
    let findIndex = s.slice(0, i).lastIndexOf(s[i]);
    findIndex === -1 ? answer.unshift(-1) : answer.unshift(i - findIndex);
  }
  answer.unshift(-1);
  return answer;
}
