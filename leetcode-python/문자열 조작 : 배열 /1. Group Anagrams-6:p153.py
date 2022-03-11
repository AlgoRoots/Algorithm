
import collections
from typing import List

# 같은 애너그램 단위로 묶는다 = 단어의 알파벳 종류와 갯수가 같은 단어끼리 묶는다.

# 1. 입력된 strs의 원소인 단어들을 알파벳별로 쪼갠다 > 그 알파벳들을 정렬시키면 애너그램들은 같은 결과물이 나오게된다:

# 2. 같은 애너그램을 가진 원소들끼리 묶어야한다. 애너그램을 key, 원래 단어를 value로 하는 딕셔너리를 만든다.

# p.155 sorted() sort() 차이.

# collections ? 파이썬의 내장모듈로 이 모듈에서는 defaultdic을 지원해줍니다. key의 개수를 세어야하는 상황이나, list나 set의 항목을 정리해야하는 상황에 적절합니다.
# list_dict = collections.defaultdict(list)
# list_dic['key1']
# list_dic['key2'] = 'test'
# defaultdict(<class 'list'>, {'key1':[], 'key2':'test'})


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # defaultdict : 존재하지 않는 key 로 인한 에러를 방지하기 위해서 사용
        # 기본값 초기화 안해줘도 자동으로 초기화 해준다. 예외처리할 때 편하다.
        anagrams = collections.defaultdict(list)
        # {}
        print(anagrams)

        for word in strs:
            # 정렬하여 딕셔너리에 추가 / 주어진 문자를 알파벳순으로 정렬하여 같은 에너그램을 key로 dic에 저장한다.
            anagrams[''.join(sorted(word))].append(word)
            # sorted(eat) => ['a', 'e', 't']
            # ''.join(sorted(word)) => 'aet'
            # anagrams['aet'].append(eat) = {'aet' : 'eat'}
            print(anagrams)
        return list(anagrams.values())



if __name__ == '__main__':
    s = Solution()
    print(s.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))