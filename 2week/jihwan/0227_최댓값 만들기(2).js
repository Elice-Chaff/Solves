//  프로그래머스 level 1 퇴댓값 만들기(2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
  //  받은 정수에 음수가 존재할 수도 있기 때문에 낮은 값부터 정렬하고 max에서 두개의 조건 중 더 큰 값을 리턴

  let acc = [...numbers.sort((a, b) => a - b)];
  return Math.max(acc[0] * acc[1], acc[acc.length - 1] * acc[acc.length - 2]);
}
