// Lv 1. K번째 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  return commands.map((el) => {
    return array.slice(el[0] - 1, el[1]).sort((a, b) => a - b)[el[2] - 1];
  });
}
