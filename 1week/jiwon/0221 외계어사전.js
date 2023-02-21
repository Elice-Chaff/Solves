// Lv 0. 외계어사전
// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
    // dic을 재배열 === spell을 재배열 >>>>>> 포함되면 1 아니면 2
    
    let newSpell = spell.sort().join(""); 
    // console.log(newSpell);
    
    let newDic = []
        for (let i in dic) {
            newDic.push(dic[i].split("").sort().join(""));
            // console.log(newDic) ;
        };
    
    return newDic.includes(newSpell) ? 1 : 2;       
}