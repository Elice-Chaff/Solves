// Lv 1. 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  // nums 오름차순 정렬
  nums.sort((a, b) => a - b);

  // unique 배열 선언
  let unique = [nums[0]];

  // nums에서 unique 요소와 중복값이 아닐 경우 unique에 push
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      unique.push(nums[i]);
    }
  }

  // 고를 수 있는 폰켓몬 수
  let pick = nums.length / 2;

  // 정답 리턴
  if (unique.length >= pick) {
    return pick;
  }
  return unique.length;
}
