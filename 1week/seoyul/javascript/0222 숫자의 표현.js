// Lv 2. 숫자의 표현
// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let result = 1;
  for (let i = 1; i < n; i++) {
    let answer = i;
    for (let j = i + 1; j<n; j++) {
      answer = answer + j;
      if (answer === n) {
        result++;
        break;
      }
    }
  }
  return result;
}

// 효율성에서 계속 실패하는데 이유를 모르겠어요...:( 