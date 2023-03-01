// Lv 0. 모스부호 (1)
//https://school.programmers.co.kr/learn/courses/30/lessons/120838

function solution(letter) {
  const morse = { 
  '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
  '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
  '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
  '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
  '-.--':'y','--..':'z'
  }
  
  //letter를 공백으로 나눠서 해당 부호에 할당된 알파벳을 찾아 반환
  return letter
      .split(" ")
      .map((m) => {
          // console.log(morse[m])
          return morse[m] //넣은 모스부호의 키값을 리턴
          })
      .join(""); //나온 알파벳읗 합치기
}