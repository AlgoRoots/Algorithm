# 변수 타입 표시 모듈
from typing import List

numList = [-1, 0, 1, 2, -1, -4]

# 아직 안품 답안임

# sort 후 [-4, -1, -1, 0, 1, 2]
#          i   j   k
#          i   j       k
#          i   j          k
#          0   1   2   3  4  5
# 풀이1. 브루트 포스(가능한 경우를 모두 계산하는 방법)

# def samsum(self, nums: List[int]) -> List[List[int]]:
#     -> 에러발생: samsum() missing 1 required positional argument: 'nums’
def samsum(nums):
    results = []
    nums.sort()

    # 브루트 포스 n^3 반복
    for i in range(len(nums) - 2):
        # 중복된 값 건너뛰기
        # i가 2번째 돌 때부터(i=1), 이전꺼와 숫자가 같으면(처음에는 이전숫자가 없어서 비교할꺼가 없으니까)
        # continue(아래 코드를 실행하지 않고 건너뜀)
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        for j in range(i + 1, len(nums) - 1):  # range(1, 5) = 4번 반복
            # j가 처음 말고, 그다음 돌 때부터 이전 숫자와 같은지 비교
            if j > i + 1 and nums[j] == nums[j - 1]:
                continue
            for k in range(j + 1, len(nums)):  # range(2, 6)
                if k > j + 1 and nums[k] == nums[k - 1]:
                    continue
                print('i:', i, ' j:', j, ' k:', k)
                sum = nums[i] + nums[j] + nums[k]
                if sum == 0:  # 합이 0일때 정답List에 추가
                    results.append([nums[i], nums[j], nums[k]])

    return results


# 풀이2. 투 포인터
# 한 개의 변수를 고정시켜두고 두 개의 변수는 투 포인터로 간격을 좁혀가면서 합을 계산

def samsum2(nums):
    results = []
    nums.sort()
    # [-4, -1, -1, 0,  1, 2]
    #   i   L             R   sum = -3  0보다 작으니까 L += 1 (오른쪽으로 한칸이동)
    #   i       L         R   sum = -3
    #   i          L      R   sum = -2
    #   i              L  R   sum = -1
    #   0   1   2   3  4  5
    for i in range(len(nums) - 2):
        # i가 이전과 중복된 값이면 건너뛰기
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        # 간격을 좁혀가며 합 `sum` 계산
        left, right = i + 1, len(nums) - 1
        while left < right:
            sum = nums[i] + nums[left] + nums[right]
            # 합이 0보다 작으면 left를 늘려주고(오른쪽으로 한칸 이동), 0보다
            # 크면, right를 줄이기
            if sum < 0:
                left += 1
            elif sum > 0:
                right -= 1
            else:
                # `sum = 0`인 경우 결과에 추가 및 스킵 처리
                results.append([nums[i], nums[left], nums[right]])

                # left가 그 다음숫자랑 같으면, left 한칸 이동
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                # right가 왼쪽숫자와 같으면, 왼쪽으로 한칸 이동
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1

    return results


result = samsum(numList)
print(result)