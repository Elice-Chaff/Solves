// Lv 0. 삼각형의 완성 조건 (2)
//https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
  let answer = 0;
  let arr = sides.sort((a, b) => b - a);
  for (let i = arr[0]; arr[1] + i > arr[0]; i--) {
    answer++;
  }
  answer += arr[1] - 1;
  return answer;
}
