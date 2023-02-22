//  프로그래머스 level 2 숫자의 표현
//  https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  var answer = 1;
  let sum = 0;

  for (i = 1; i < n; i++) {
    sum = 0;
    for (j = i; j <= n; j++) {
      sum += j;
      // console.log(`${sum} , j=${j} `)
      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }
  return answer;
}
