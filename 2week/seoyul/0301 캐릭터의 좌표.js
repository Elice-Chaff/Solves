// Lv 0. 캐릭터의 좌표
//https://school.programmers.co.kr/learn/courses/30/lessons/120861

// 테스트케이스 8번 실패.. 내일다시 ^^


function solution(keyinput, board) {
  let answer = [0, 0];
  let max = board.map((el) => Math.floor(el / 2));

  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === 'left') {
      if (!(Math.abs(answer[0]) == max[0])) {
        answer = [...answer];
        answer[0] = answer[0] - 1;
      }
    } else if (keyinput[i] === 'right') {
      if (!(Math.abs(answer[0]) == max[0])) {
        answer = [...answer];
        answer[0] = answer[0] + 1;
      }
    } else if (keyinput[i] === 'up') {
      if (!(Math.abs(answer[1]) == max[1])) {
        answer = [...answer];
        answer[1] = answer[1] + 1;
      }
    } else if (keyinput[i] === 'down') {
      if (!(Math.abs(answer[1]) == max[1])) {
        answer = [...answer];
        answer[1] = answer[1] - 1;
      }
    }
  }
  return answer;
}
