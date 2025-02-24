function solution(bridge_length, weight, truck_weights) {
  let bridge = Array(bridge_length).fill(0);

  let time = 0;

  while (bridge.length) {
    bridge.shift();
    time += 1;

    if (truck_weights.length) {
      console.log(bridge);
      let sum = bridge.reduce((pre, curr) => pre + curr, 0);

      if (sum + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
  }
  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
