// Lv 0. 연속된 수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num, total) {
  var median = total / num;
  var answer = [];
  if (num % 2 === 1) {
    answer.push(median);
    for (let i = 1; i <= (num - 1) / 2; i++) {
      answer.push(median - i, median + i);
    }
  } else {
    answer.push(Math.floor(median), Math.ceil(median));
    for (let i = 1; i < num / 2; i++) {
      answer.push(Math.floor(median) - i, Math.ceil(median) + i);
    }
  }
  return answer.sort((a, b) => a - b);
}
