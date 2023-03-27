function solution(food) {
  let answer = "";

  food.forEach((c, i) => {
    answer += String(i).repeat(Math.floor(food[i] / 2));
  });
  // array.reverse 배열이 와야 사용가능해서  전개 연산으로 문자열을 배열로 리턴 가능.
  let reverse = [...answer].reverse().join("");
  return answer + "0" + reverse;
}
