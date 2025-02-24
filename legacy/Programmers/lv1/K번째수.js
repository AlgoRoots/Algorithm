function solution(array, commands) {
  // let answer = [];
  // let sliced = [];

  // for (let i = 0; i < commands.length; i++) {
  //   sliced = array.slice(commands[i][0] - 1, commands[i][1]);
  //   sliced.sort((a, b) => a - b);
  //   answer.push(sliced[commands[i][2] - 1]);

  //   sliced = [];
  // }

  //기억하자 command의 배열 const상수로 지정한거....
  return commands.map((command) => {
    const [sPosition, ePosition, tPosition] = command;

    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);
    return newArray[tPosition - 1];
  });
}

// [5, 6, 3]

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
