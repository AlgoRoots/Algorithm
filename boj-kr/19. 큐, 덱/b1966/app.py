from collections import deque

testcases = int(input())

#
# 1
# 4 2
# 1 2 3 4

# 1. testcases 로 입력을 받고, for 문을 돌려 n, m 과 문서의 중요도 queue 를 받는다.
for _ in range(testcases):
    n, m = list(map(int, input().split()))     # 4 2
    queue = deque(map(int, input().split()))   # 1 2 3 4  
    idx = deque(range(0, n))             

    print('testcases :', testcases)
    print('n,m :', n, m)
    print('queue :', queue)
    print('idx :', idx)

    idx[m] = 'target'
    print('idx[m] :', idx[m])
    print('idx :', idx)

    # order 초기화
    order = 0

    while True:
        # 1. 첫번째 if: queue 첫번째 값 = queue lists 최댓값?
        if queue[0] == max(queue):
            order += 1
            print('order: ', order)

            # 두번째 if: idx의 첫 번째 값 = "target"?
            if idx[0] == 'target':
                print('order: ', order)
                break
            else:
                queue.popleft()
                idx.popleft()
                print('queue popleft(): ', queue)
                print('idx popleft(): ', idx)
        # 2. idx의 첫번째 값이 target이 될 때까지 반복된다.
        else:
            queue.append(queue.popleft())
            idx.append(idx.popleft())
            print('queue append: ', queue)
            print('idx append: ', idx)