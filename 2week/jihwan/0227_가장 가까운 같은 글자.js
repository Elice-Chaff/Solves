//  프로그래머스 level 1 가장 가까운 같은 글자
// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  let arr = [...s];

  //새로운 배열을 만들어 슬라이싱
  let result = arr.map((cur, i) => {
    let num = s.slice(0, i).lastIndexOf(cur);
    // console.log(num, i , cur )
    return num < 0 ? num : i - num;
  });
  return resul
}
