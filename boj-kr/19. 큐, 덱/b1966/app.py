testcases = int(input())

# 1
# 6 0
# 1 1 9 1 1 1
#
# 1
# 4 2
# 1 2 3 4

# 1. testcases 로 입력을 받고, for 문을 돌려 n, m 과 문서의 중요도 urgent 를 받는다.
for _ in range(testcases):
    n, m = list(map(int, input().split()))     # 1
    urgent = list(map(int, input().split()))   # 6 0
    idx = list(range(len(urgent)))             # 1 1 9 1 1 1

    print('testcases :', testcases)
    print('n,m :', n, m)
    print('urgent :', urgent)
    print('idx :', idx)

    idx[m] = 'target'
    print('idx[m] :', idx[m])
    print('idx :', idx)

    # order 초기화
    order = 0

    while True:
        # 1. 첫번째 if: urgent 첫번째 값 = urgent lists 최댓값?
        if urgent[0] == max(urgent):
            order += 1
            print('order: ', order)

            # 두번째 if: idx의 첫 번째 값 = "target"?
            if idx[0] == 'target':
                print('order: ', order)
                break
            else:
                urgent.pop(0)
                idx.pop(0)
                print('urgent pop(0): ', urgent)
                print('idx pop(0): ', idx)
        # 2. idx의 첫번째 값이 target이 될 때까지 반복된다.
        else:
            urgent.append(urgent.pop(0))
            idx.append(idx.pop(0))
            print('urgent append: ', urgent)
            print('idx append: ', idx)


