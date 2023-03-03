// Lv 1. 과일장수
// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
  const arr = score.sort((a, b) => b - a); // 품질순 정렬
  const ch = Math.floor(arr.length / m); // 만들 수 있는 상자 개수
  let cnt = 0;
  for (let i = 0; i < ch; i++) {
    cnt += arr[m * i + m - 1] * m;
  }
  return cnt;
}
