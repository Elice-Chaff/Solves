//school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {
  let answer = 0;

  let color = 0;

  for (i in section) {
    if (section[i] >= color) {
      color += m;
      color = section[i] + m;
      answer++;
    }
  }

  return answer;
}
