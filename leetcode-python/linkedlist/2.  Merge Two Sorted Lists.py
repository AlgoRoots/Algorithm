# Definition for singly-linked list.


# l1 = [1,3,4]
#
# l2= [1,2,3]
#
# --> [1,1,2,3,3,4]


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        # 1. l1이 None이면, l1과 l2를 무조건 바꾸어야 함
        # 2. 이때, l2가 None이면 바꾸면 안됨
        # 3. l1, l2 노드의 값이 작은 쪽이 l1가 됨
        if (not l1) or (l2 and l1.val > l2.val):
            l1, l2 = l2, l1

        # 이렇게 바꾸었을 때, l1이 None이면 l1, l2둘다 None임
        # 둘다 None이라면 재귀를 더이상 하면 안되기에, if로 체크함
        if l1:
            # l1이 존재하면, l1의 next를 찾기 위한 재귀를 실행
            l1.next = self.mergeTwoLists(l1.next, l2)
        return l1