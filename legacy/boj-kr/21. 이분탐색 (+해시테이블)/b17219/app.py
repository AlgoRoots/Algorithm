import sys
input = sys.stdin.readline

N, M = map(int, input().split())
add = {}

for _ in range(N):
    site, ps = input().split()
    add[site] = ps

#
# strip([chars]) : 인자로 전달된 문자를 String의 왼쪽과 오른쪽에서 제거합니다.
# lstrip([chars]) : 인자로 전달된 문자를 String의 왼쪽에서 제거합니다.
# rstrip([chars]) : 인자로 전달된 문자를 String의 오른쪽에서 제거합니다.
for _ in range(M):
    print(add[input().strip()])


