const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = '';

for (let i = 1; i <= +input; i++){
    answer += i + '\n';
}

console.log(answer);




// 시간초과 
// solution(+input[0]);

// function solution(n){

//     for ( let i = 1; i <= n; i++) {
    
//     //console.log(i);
//     }
// }


