// 다리를 지나는 트럭
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  // 다리 만들기
  let bridge = Array.from({ length: bridge_length }, () => 0);
  console.log(bridge);
  // 트럭을 이동시키기
  // 트럭 배열이 빌때까지 실행
  while (true) {
    // 다리위의 트럭 이동처리
    bridge.shift();
    console.log("shift", bridge);
    bridge.push(0);
    console.log("push(0)", bridge);
    answer += 1;
    // 다리의 현재 무게
    let bridgeWeight = bridge.reduce((prev, curr) => prev + curr);
    console.log("bridgeWeight", bridgeWeight);
    // 다리가 무게를 견딜 수 있는 경우
    if (bridgeWeight + truck_weights[0] <= weight) {
      const truck = truck_weights.shift();
      // 트럭을 다리에 올리고 다리위의 무게 더하기
      bridge[bridge_length - 1] = truck;
      bridgeWeight += truck;
    }
    if (bridgeWeight === 0) {
      break;
    }
  }
  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
