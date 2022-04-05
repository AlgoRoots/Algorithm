function solution(n, arr1, arr2) {
  const answer = [];
  const A = arr1.map((num) => num.toString(2).padStart(n, 0));
  const B = arr2.map((num) => num.toString(2).padStart(n, 0));
  console.log("a, b?!!!", A, B);
  const sumArr = [];
  for (let i = 0; i < n; i++) {
    sumArr.push(String(+A[i] + +B[i]).padStart(n, 0));
  }
  console.log("sum", sumArr);
  for (let num of sumArr) {
    answer.push(
      num
        .split("")
        .map((item) => (item === "0" ? (item = " ") : (item = "#")))
        .join("")
    );
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
//	["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
console.log(solution(5, [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]));
//	["######", "### #", "## ##", " #### ", " #####", "### # "]
// [ '######', '###  #', '##  ##', '#### ', '#####', '### # ' ]

// 1. 10진수를 2진수로 변환한다. arr2 원소 하나하나를 arr1 의 위치에 넣는다
// 이 때 arr2[0][0] === 1일 때만 arr1[0][0]을 1로 바꿔준다.

// 2. 최종적으로 겹쳐진 이차배열이 나올 것이고 1= #, 0 = " "으로 바꿔서 리턴한다. (전에 해야하나? )
