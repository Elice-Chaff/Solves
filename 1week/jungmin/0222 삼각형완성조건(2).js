// Lv 0. 삼각형의 완성조건(2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
  sides.sort((a, b) => a - b);
  // 가장 긴변이 side[1]일 떄
  var case1 = sides[1] - (sides[1] - sides[0]);
  // 가장 긴 변이 sides에 없을 때
  var case2 = sides[1] + sides[0] - 1 - sides[1];
  return case1 + case2;
}

// 이전 풀이
// function solution(sides) {
//     sides.sort(function(a, b){
//         return a-b
//     })
//     // 둘 중 하나가 가장 긴 변일 때..
//     var a = sides[1] - sides[0]
//     var b = sides[1] - a
//     // 나머지 한변이 가장 긴 변일 때..
//     var c = sides[0] + sides[1] - 1 - sides[1]
//     return b + c
// }
