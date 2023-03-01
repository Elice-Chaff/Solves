//  프로그래머스 level 1 2016
// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  let year = 2016;
  let month = a;
  let day = b;

  return new Date(year, month - 1, day).toString().slice(0, 3).toUpperCase();
}
