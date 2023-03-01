function solution(keyinput, board) {
  // 배열에 두개의 값 리턴..
  // 각 케이스마다 , left, down은 음수기 때문에 board도 음수로 변환 비교

  let answer = [0, 0];

  let heightVelify = Math.floor(board[1] / 2);
  let widthVelify = Math.floor(board[0] / 2);

  for (i in keyinput) {
    if (keyinput[i] == "left" && -widthVelify < answer[0]) {
      answer[0]--;
    } else if (keyinput[i] == "right" && widthVelify > answer[0]) {
      answer[0]++;
    } else if (keyinput[i] == "up" && heightVelify > answer[1]) {
      answer[1]++;
    } else if (keyinput[i] == "down" && -heightVelify < answer[1]) {
      answer[1]--;
    }
  }

  return answer;
}

// Switch로 바꿔보기
