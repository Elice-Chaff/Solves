// Lv 1. 가장 가까운 같은 글자(2)
// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  arr = s.split("");
  new_arr = [-1];
  diff = 0;
  for (i = 1; i < arr.length; i++) {
    for (j = i - 1; j > -1; j--) {
      if (arr[i] === arr[j]) {
        diff = i - j;
        break;
      }
      diff = 0;
    }
    diff === 0 ? new_arr.push(-1) : new_arr.push(diff);
  }
  return new_arr;
}
