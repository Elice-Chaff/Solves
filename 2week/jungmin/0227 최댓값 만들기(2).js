function solution(numbers) {
  mul = [];
  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      mul.push(numbers[i] * numbers[j]);
    }
  }
  return Math.max(...mul);
}
