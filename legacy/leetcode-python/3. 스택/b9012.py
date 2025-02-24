import sys
input = sys.stdin.readline

def solve(string):
    stack=[]
    #문자열string에 들어있는 문자에 대해
    for char in string:
        #만약 stack이 비어있는데 ')'나오면 쌍이 안맞는것이므로 NO
        if len(stack) == 0 and char == ')':
            return 'NO'
        #만약 '('라면 stack에 추가
        if char == '(':
            stack.append(char)
        #만약 ')'라면(stack이 비어있지 않으면서 ')'일경우)
        else:
            #만약 맨마지막 요소가 '(' 이면
            if stack[-1] == '(':
                stack.pop()
            else:
                return 'NO'
    if len(stack)==0:
        return 'YES'
    return 'NO'

if __name__ == "__main__":
    n = int(input().strip())
    for i in range(n):
        string = input().strip()
        print(solve(string))