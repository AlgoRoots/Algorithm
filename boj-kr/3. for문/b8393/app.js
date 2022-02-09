const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');



solution(+input[0]);


function solution(n){
    let sum = 0;
    for ( let i=0; i <= n; i++) {
        //sum = sum + i;
        sum += i;
    }
console.log(sum);
}

// i = 0 이든 1이던 i 는 정수 n까지 반복해야함으로 값이 값게 나오는것..

// i = 1
// 0 = 0 +1 
// 1 = 1+ 2
// 3 = 3 + 3

// i = 0
// 0 = 0 + 0 i = 0
// 0 = 0 + 1 i = 1
// 1 = 1 + 2 i = 2
// 3 = 3 + 3 i = 3 sum = 6 

