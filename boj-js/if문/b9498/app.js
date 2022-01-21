const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// console.log(input); / [ '100' ]


solution(+input[0]);
// console.log(+input); // [ 100 ]

function solution(num){
    if ( 90 <= num && num<= 100){
        console.log('A')
    }
    else if ( 80 <= num && num <= 89){
        console.log('B');
    }
    else if ( 70 <= num && num <= 79){
        console.log('C');
    }
    else if ( 60 <= num && num <= 69){
        console.log('D');
    } else {
        console.log('F');
    }
}




