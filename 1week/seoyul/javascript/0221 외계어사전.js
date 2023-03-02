// Lv 0. 외계어사전
// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
  let result = '';
  let answer = dic.map((el) => {
    for (let i = 0; i < spell.length; i++) {
      el.includes(spell[i]) ? (result = 1) : (result = 2);
      if (result === 2) {
        break;
      }
    }
    return result;
  });
  return answer.includes(1) ? 1 : 2;
}
