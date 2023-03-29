function solution(n, m, section) {
  let result = 0;
  let painted = 0;
  for (let i = 0; i < section.length; i++) {
    if (painted >= section[i]) {
      continue;
    }
    painted = section[i] + m - 1;
    result++;
  }
  return result;
}
