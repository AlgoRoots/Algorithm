function solution(nums) {
  const getToyCount = nums.length / 2;

  const sortedToys = nums.reduce(
    (dic, key) => ((dic[key] = dic[key] ? dic[key] + 1 : 1), dic),
    {}
  );

  const keySize = Object.keys(sortedToys).length;

  const maxCount = getToyCount >= keySize ? keySize : getToyCount;

  return maxCount;
}

console.log(solution([3, 1, 2, 3])); //2
console.log(solution([3, 3, 3, 2, 2, 4])); //3
console.log(solution([3, 3, 3, 2, 2, 2])); //2
console.log(solution([3, 2])); //1
console.log(solution([3])); //1

// 왜 항상 짝수개수로 주는거지 ? 반만 가져가도록 해야하기 때문이지! 레벨1짜리이기 때문이야!

// 폰켓몬 배열에 한개만있으면 무조건 0을 리턴한다. 반도 못가지기때문이지! > 필요없어 어차피짝수라

// 최대 경우의 수가 여러개여도 그냥 최댓값만 리턴하면 되지!

// nums에서 하나씩 우선 값이 다르면 다 써야됨 reduce() 없으면 1이고 아니면 +=1

// 가질 수 있는 인형개수 let getToyCount = nums/2 = 3

// 똑같은 인형의 개수가 얼만큼있는지 분류해주자.

// key 의 개수와 maxCount와 같은가 ? > count가 key개수보다 크거나 같을 때 성립된다.
// 그럼 count가 key개수보다 작을 때는 ? count가 maxCount가 된다.

// {1:1, 2: 1, 3: 2}

// {2:2, 3: 3, 4: 1}

// {2:2, 3: 3}
