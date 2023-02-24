// Lv.0 숨어있는 숫자의 덧셈 (2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
  let result = 0;
  for (let i = 0; i < my_string.length; i++) {
    let thisNum = '';
    while (!Number.isNaN(Number(my_string[i]))) {
      thisNum += my_string[i];
      i++;
    }
    result += +thisNum;
  }
  return result;
}
