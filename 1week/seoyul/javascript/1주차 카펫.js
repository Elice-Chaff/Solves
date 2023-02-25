// 1주차 위클리. 카펫
// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  var answer = [];
  for (let i = 1; i <= yellow; i++) {
    let total_brown = (yellow / i) * 2 + i * 2 + 4;
    total_brown === brown ? (answer = [i + 2, yellow / i + 2]) : '';
  }

  return answer;
}
