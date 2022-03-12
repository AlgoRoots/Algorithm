#
# # Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
#
#
# class Solution:
#     def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
#         # 1. l1 이 None이면, l1과 l2를 무조건 바꿔야한다.
#         # 2. 이 때 l2가 None이면 바꾸면 안된다.
#         # 3. l1, l2 노드의 값이 작은 쪽이 l1이 된다.
#         if (not l1) or (l2 and l1.val > l2.val):
#             l1, l2 = l2, l1
#         if l1:
#             l1.next = self.mergeTwoLists(l1.next, l2)
#         return l1

# 입력: l1 = [1 -> 2-> 4] / l2 = [1 -> 3-> 4]
# 출력 : [1 -> 1 -> 2 -> 3 -> 4 -> 4]

# l1 = [1 -> 2-> 4]
#
# l2 = [1 -> 3-> 4]
#
# print(l1)