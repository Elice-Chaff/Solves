//  프로그래머스 level 0 모스 부호
//https://school.programmers.co.kr/learn/courses/30/lessons/120838

function solution(letter) {
  var answer = "";
  let morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  let arr = letter.split(" ");
  console.log(arr);

  for (i in arr) {
    for (j in morse) {
      if (arr[i] == j) {
        answer += morse[j];
        // console.log(morse[j]);
      }
      // console.log(morse[i])
    }
  }

  return answer;
}
