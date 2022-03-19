function solution(nums) {
  let permute = (nums, set, answers) => {
    if (!nums.length) answers.push([...set]);

    for (let i = 0; i < nums.length; i++) {
      const newNums = nums.filter((n, index) => index !== i);
      set.push(nums[i]);
      permute(newNums, set, answers);
      set.pop();
    }

    permute(nums, [], []);
    return answers;
  };
}

let input = [1, 2, 3];
console.log(solution(input));
