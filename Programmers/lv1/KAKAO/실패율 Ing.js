function solution(N, stages) {
  let answer = [];

  const failRate = [];

  for (let i = 1; i <= N; i++) {
    let curStageCount = stages.filter((v) => v === i).length;
    let curSuccessCount = stages.filter((v) => v >= i).length;
    failRate.push([i, curStageCount / curSuccessCount]);
  }

  console.log("failRate", failRate);

  // const failRate = curStageCount.map(
  //   (item, index) => item / curSuccessCount[index]
  // );
  // console.log("failRate: ", failRate);

  // let index = Array.from({ length: failRate.length }, (_, i) => i + 1);
  // console.log("index: ", index);

  let first = failRate[0][1];

  while (true) {
    if (failRate.length === 0) break;
    first = failRate[0];
    if (first >= Math.max(...failRate)) {
      failRate.shift();
      answer.push(index.shift());
    } else {
      failRate.push(failRate.shift());
      index.push(index.shift());
    }
  }
  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); //	[4,1,2,3]

// 실패율은 다음과 같이 정의한다.
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 실패율이 같다면 작은번호부터 리턴

// 1. 정렬하기

// [1, 2, 2, 2, 3, 3, 4, 6];
// [(4, 4, 4, 4, 4)];

// 반복문 1부터 5까지 i <= N.length 1단게, 2단계... case1에서 6은 단계를 넘어서서 연산필요없음
// 1단계는 ? 1인 개수 찾으면 됨 !  1의 개수 /steps.lenght - 1  // 1/8 실패율에 담는다. failRate += 매단계결과값

// 실패율 내림차순 정렬 > 이거에 해당하는 stages로 리턴해야함 그러기 위해서는 failRate 인덱스값을 가져와야함

// 큐 문제였네 !

// stage = [1,2,3, 4, 5]
let index = [1, 2, 3, 4, 5];
let failRate = [2, 1, 5, 2, 3];
// 3 5 1 4 2

//2 3 4   5   1
1, 5, 2, 3, 2;

//3  4  5  1  2
5, 2, 3, 2, 1; // result.push(index.shif())  result = [3]

//4  5  1  2
2, 3, 2, 1;

//5  1  2  4
3, 2, 1, 2; //  result.push(index.shif())   result = [3, 5]

//1  2  4
2, 1, 2; //  result.push(index.shif())   result = [3, 5, 1]

//2  4
1, 2;

//4  2
2, 1; //  result.push(index.shif())   result = [3, 5, 1, 4]

// 2
1; //  result.push(index.shif())   result = [3, 5, 1, 4, 2]
// 2341
