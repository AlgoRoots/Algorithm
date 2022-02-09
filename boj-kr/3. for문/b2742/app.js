const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = '';
input = +input;
//console.log(input);

    for (let i = input; i >= 1; i--){
        answer += i + '\n';
    }

console.log(answer);


