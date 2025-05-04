function solution(nums) {
  const set = new Set(nums);
  const count = set.size;
  const limit = nums.length / 2;
  return Math.min(count, limit);
}
