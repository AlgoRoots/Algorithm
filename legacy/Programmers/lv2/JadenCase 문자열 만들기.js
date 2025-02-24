function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, i) => (!i ? char.toUpperCase() : char.toLowerCase()))
        .join("")
    )
    .join(" ");
}

// ---------------
// 밑에는 다른분 풀이
// substring()를 사용하면  map()두번 쓸 필요 없다.
// v[0]로 하면 공백일 경우 에러난다. charAt(0)으로 사용, substring(1) 통해 1부터 뒤까지 소문자로 바꿔줄 수 있다.

// function solution(s) {
//     return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
// }

console.log(solution("3People unFollowed me")); // 	"3people Unfollowed Me"
console.log(solution("for the last week")); // 		"For The Last Week"
