class ListNode:
    # init 함수를 만든다. 네모상자(val)와 화살표(next)
    def __init__(self, val=0, next=None):
        #나의 value는 val이고, next는 next다
        self.val = val
        self.next = next


class LinkedList:
    # 값을 중간에 넣으려면 첫번째 노드로 항상 거쳐가서 첫번째 값을 head로 지정해준다.
    def __init__(self):
        # 나의 head는 None 이다.
        self.head = None
    # 값을 붙인다.
    def append(self, val):
        # 만약 비어있는 리스트이면 ListNode에 입력받은 val을 넣어 head라고 하자 (새로운 노드 append)
        if not self.head:
            self.head = ListNode(val, None)
            return
        # 내가 바로보고있는 head 를 node라고 한다.
        node = self.head
        # node에 화살표가 있으면 계속 넘어가 while이 끝나면 제일 끝에있는 노드가 된다.
        while node.next:
            node = node.next
        # 새로 하나 만들어서 그 다음에 붙여준다 (append)
        node.next = ListNode(val, None)

