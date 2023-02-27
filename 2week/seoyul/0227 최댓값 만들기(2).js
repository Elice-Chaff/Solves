// Lv.1 최댓값 만들기(2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(nums) {
  let max = nums[0] * nums[1];
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      let res = nums[i] * nums[j];
      res >= max ? (max = res) : '';
    }
  }
  return max;
}
