// https://ha-young.github.io/2021/algorithm_javascript/LeetCode-17_Letter_Combinations_of_a_Phone_Number_DFS-BFS/
// 재귀 너무 어렵다..

function solution(digits) {
  if (digits.length === 0) return [];
  // global result
  const result = [];

  // alpha hash map
  const alpha = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // dfs recursive helper
  const dfs = (i, digits, slate) => {
    //base case
    console.log("----------------------0slate", i, slate);
    if (i === digits.length) {
      result.push(slate.join(""));
      return;
    }

    // dfs recursive case
    let chars = alpha[digits[i]];

    for (let char of chars) {
      console.log("char", i, slate, char);
      slate.push(char);
      dfs(i + 1, digits, slate); //
      slate.pop();
      console.log("--------slate", i, slate, char);
    }
    // 왜 result = ['ad' , 'ae', 'af'] 에서  for문 안 dfs()가 다 돌게 됨, 하지만 처음에 abc로 시작했던 for문은 종료되지 않은 상태임
    // 다시 abc차례로 state.pop()됨.
  };
  dfs(0, digits, []);
  return result;
}

let digits = "23";
console.log(solution(digits));
