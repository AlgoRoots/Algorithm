const findKthLargest = function (nums, k) {
  let target = nums.length - k;
  return quickSelect(nums, target, 0, nums - length - 1);
};
let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;

console.log(findKthLargest(nums, k));
