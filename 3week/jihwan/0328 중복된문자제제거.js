function solution(my_string) {
  const arr = my_string.split("");

  const result = [...new Set(arr)];

  return result.join("");
}
