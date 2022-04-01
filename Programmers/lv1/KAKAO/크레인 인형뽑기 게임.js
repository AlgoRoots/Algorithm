function solution(board, moves) {
  let count = 0;
  let bucket = [];

  // colum기준으로 row 2차배열로 만들기
  let newBoard = Array.from(Array(board.length), () => Array());
  // new Array(5).fill([]); 안되는데 같은열에 다 들어감.

  // let newBoard = [];

  // for (let i = 0; i < board.length; i++) {
  //   newBoard.push(Array());
  // }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      newBoard[j].push(board[i][j]);
    }
  }
  //모든 배열  0 제거
  let filterBoard = [];

  for (let i = 0; i < board.length; i++) {
    filterBoard.push(newBoard[i].filter((v) => v !== 0));
  }
  console.log(filterBoard);

  for (let i = 0; i < moves.length; i++) {
    // 그 데이터가 해당하는 newBoard에서 0이 아닌 제일 앞에있는 값을 shift한다.
    // shift한 것을 answer에 푸시한다.
    // 만약 이전값과 방금 푸시한값이 같다면 둘다 제거해주고 count++해준다.

    if (bucket.length === 0) {
      bucket.push(filterBoard[moves[i] - 1].shift());
    } else {
      let latestPick = bucket[bucket.length - 1];

      let newPick = filterBoard[moves[i] - 1].shift();

      if (latestPick === newPick && newPick !== undefined) {
        count++;
        bucket.pop();
      } else {
        bucket.push(newPick);
      }
    }
    console.log("count i:", i, count);
    console.log(bucket);
  }

  return count * 2;
}
// console.log(
//   solution(
//     [
//       [0, 0, 0, 0, 0],
//       [0, 0, 1, 0, 3],
//       [0, 2, 5, 0, 1],
//       [4, 2, 4, 4, 2],
//       [3, 5, 1, 3, 1],
//     ],
//     [1, 5, 3, 5, 1, 2, 1, 4]
//   )
// );
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 4, 1, 4, 5, 3, 5]
    // 4
    // 4, 4
    // 4
    // 4 3
    // 4 3 3
    // 4
    // 4, 4, 3, 3
    //
  )
);
