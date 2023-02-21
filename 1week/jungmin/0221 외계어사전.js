// Lv 0. 외계어사전
// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
  // 오랜만에(?) js로 돌아왔더니 감이 안잡혀서 구글링해서 풀었습니다 ..
  spell = spell.sort().join();

  return dic
    .map((elem) => elem.split("").sort().join())
    .find((item) => item === spell) !== undefined
    ? 1
    : 2;
}
