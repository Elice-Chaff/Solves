// Lv 0. 숨어있는 숫자의 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
  return my_string.split(/[^0-9]/).reduce((acc, cur) => acc + Number(cur), 0);
}
