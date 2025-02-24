// 한 열 번 반복해야 익숙해질듯

function solution(n) {
  let answer = 0;

  const dfs = (board, row) => {
    if (row === n) {
      answer++;
      console.log(`${answer}경우에 가능합니다.`);
      console.log("답", board);
    } else {
      for (let col = 1; col <= n; col++) {
        board[row + 1] = col;
        if (isValid(board, row + 1)) dfs(board, row + 1);
      }
    }
    console.log("2", board);
  };

  const isValid = (board, row) => {
    for (let col = 1; col < row; col++) {
      if (board[col] === board[row]) return false;
      if (Math.abs(board[col] - board[row]) === Math.abs(col - row))
        return false;
    }
    return true;
  };

  for (let col = 1; col <= n; col++) {
    // 체스판 1부터 시작하게 하기 위해 n+1
    const board = new Array(n + 1).fill(0);
    board[1] = col;
    console.log("1", board);
    dfs(board, 1);
    console.log("3", board);
  }

  return answer;
}

console.log(solution(4));
