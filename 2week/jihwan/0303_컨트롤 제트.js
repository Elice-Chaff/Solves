function solution(s) {
    var answer = 0;
    
    let temp = s.split(' ')
    
    for(i in temp){
        if(!isNaN(temp[i])) {            
            answer += parseInt(temp[i])
        } else {            
            answer -= parseInt(temp[i-1])
        }
    }
    return answer;
}