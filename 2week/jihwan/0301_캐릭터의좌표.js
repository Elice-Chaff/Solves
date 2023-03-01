//  프로그래머스 level 0 캐릭터의 자표
// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
  // 배열에 두개의 값 리턴..
  // 각 케이스마다

  var answer = [0, 0];

  let downVelify = -Math.floor(board[1] / 2);
  let upVelify = Math.floor(board[1] / 2);
  let leftVelify = -Math.floor(board[0] / 2);
  let rightVelify = Math.floor(board[0] / 2);

  for (i in keyinput) {
    if (keyinput[i] == "left" && leftVelify != answer[0]) {
      answer[0]--;
    } else if (keyinput[i] == "right" && rightVelify != answer[0]) {
      answer[0]++;
    } else if (keyinput[i] == "up" && upVelify != answer[1]) {
      answer[1]++;
    } else if (keyinput[i] == "down" && downVelify != answer[1]) {
      answer[1]--;
    }
  }
  return answer;
}
