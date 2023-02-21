// Lv 1. K번째 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  var answer = [];
  commands.forEach((item) => {
    answer.push(
      array.slice(item[0] - 1, item[1]).sort((a, b) => a - b)[item[2] - 1]
    );
  });
  return answer;
}
