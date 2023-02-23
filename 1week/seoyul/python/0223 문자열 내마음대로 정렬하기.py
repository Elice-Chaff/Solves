# Lv 1. 문자열 내 마음대로 정렬하기
# https://school.programmers.co.kr/learn/courses/30/lessons/12915

def solution(strings, n):
    # new_arr=sorted(strings)
    # return sorted(new_arr, key=lambda x:x[n])
    return sorted(strings, key=lambda x:(x[n],x))