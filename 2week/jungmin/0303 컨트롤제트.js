// Lv 0. 컨트롤 제트
// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
  let answer = 0;
  let arr = s.split(" ");
  for (i in arr) {
    arr[i] !== "Z"
      ? (answer += parseInt(arr[i]))
      : (answer -= parseInt(arr[i - 1]));
  }
  return answer;
}
