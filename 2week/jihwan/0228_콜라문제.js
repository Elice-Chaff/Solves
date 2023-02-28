//  프로그래머스 level 1 콜라 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let hasBottle = n;
  let getCola = 0;
  var answer = 0;

  while (hasBottle >= a) {
    answer = parseInt(hasBottle / a) * b;
    getCola += answer;
    hasBottle = answer + (hasBottle % a);
    // console.log(answer);
  }

  return getCola;
}
