// Lv 1. 2016년
// https://school.programmers.co.kr/learn/courses/30/lessons/12901
function solution(a, b) {
  var day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var answer = b + 4;
  for (i = 0; i < a - 1; i++) {
    answer += date[i];
  }
  return day[answer % 7];
}

console.log(solution(1, 1));
