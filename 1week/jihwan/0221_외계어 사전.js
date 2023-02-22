//  프로그래머스 level 0 외계어 사전
//  https://school.programmers.co.kr/learn/courses/30/lessons/120869?language=javascript

function solution(spell, dic) {
  let answer = 0;
  let count = 0;
  for (i in dic) {
    for (j in spell) {
      if (dic[i].includes(spell[j])) {
        // console.log(dic[i], spell[j]);
        count++;
      }
    }
    // console.log(count, spell.length);
    if (count == spell.length) {
      answer = 1;
      break;
    } else {
      answer = 2;
    }
    count = 0;
  }
  return answer;
}
