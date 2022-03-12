# # Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
#
#
#
# class Solution:
#     def print_list(self, list):
#         while list:
#             if list.next:
#                 print(list.val, ' -> ', end='')
#             else:
#                 print(list.val)
#             list = list.next
#
#
#     def reverseList(self, head: ListNode) -> ListNode:
#         node, prev = head, None
#
#         while node:
#             next, node.next = node.next, prev
#             prev, node = node, next
#
#         return prev
#
#
#
# Solution().print_list(Solution().reverseList(ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))))



class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseListRecur(self, head: ListNode) -> ListNode:
        def reverse(node: ListNode, prev: ListNode = None):
            if not node:
                return prev
            next, node.next = node.next, prev return reverse(next, node) return reverse(head) def reverseListList(self, head: ListNode) -> ListNode: node, prev = head, None while node: next, node.next = node.next, prev prev, node = node, next return prev def print_list(self, list): while list: if list.next: print(list.val, ' -> ', end='') else: print(list.val) list = list.next Solution().print_list(Solution().reverseListList(ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))))
