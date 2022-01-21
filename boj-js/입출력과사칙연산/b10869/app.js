const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


input = input[0];
input = input.split(' ').map((item) => +item);


solution(input[0], input[1]);

function solution(A, B){

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(Math.floor(A/B));
//Math.floor 소수점 버려줍니다. = 몫만 남김
console.log(A%B);
// % 나눗셈 후 나머지를 출력해준다.
}


