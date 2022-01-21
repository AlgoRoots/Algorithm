const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



input = input.map((item) => +item);

// console.log(input); / [ 472, 385 ]

solution(input[0], input[1]);

function solution(A, B){

    // console.log('A: ', A, 'B :', B); /  A:  472 B : 385

    // 472 * 5 = 2360 / stringB[2];
    // 472 * 8 = 3776 / stringB[1];
    // 472 * 3 = 1416 / stringB[0];
    // 2360 + 3776+'0'+ 1416+'00' = 181720

    const stringB = String(B);
    // String(B)는 숫자를 문자로 바꿔준다. 글씨 색이 있으면 숫자, 없으면 문자라고 기억하자. 
    // console.log('str: ', stringB);  / str:  385
    // console.log('strB type: ', typeof stringB); / strB type:  string


    // 385 -> ['3', '8', '5'] 이처럼 문자는 글자 하나하나를 배열의 요소로 인식한다. 

    const one = +stringB[0];
    const ten = +stringB[1];
    const hun = +stringB[2];
    // console.log('1: ', one); // 1:  3
    // console.log('2: ', ten); // 2:  8
    // console.log('3: ', hun); // 3:  5
    
    
    console.log(A * hun);
    console.log(A * ten);
    console.log(A * one);
    console.log(A * B);

}


