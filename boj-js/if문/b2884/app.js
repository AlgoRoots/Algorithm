const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0];

input = input.split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(H, M){


    M -= 45; 
    if ( M < 0){
        M += 60;
        H -= 1;
    }
    if ( H < 0 ){
        H = 23
    }

    console.log( H, M); 
    // 10 10
    // m 가 45보다 작을 때 
    // 10-1 : (60-45)+ m

    // 10 35 
    // 10-1 : 60-45 + m

    // 23 40
    // 23-1 : (60-45)+40
    // m이 45보다 같거나 클 때
    // 23 : 46
    // 23-1 : 46-45
    // 22:01

    // 0:0 
    //  0+23 : 60-45 + m
    // 23:15
    

    // if ( H > 0 && M < 45){
    //     console.log( H-1 , 15 + M);
    // } 
    // if ( H > 0 &&  M >= 45){
    //     console.log( H-1 ,  M - 45);
    // } 
    
    // if ( H == 0 &&  M < 45){
    //     console.log( H + 23 , 15 + M);
    // } 
    
    // if ( H == 0 &&  M >= 45){
    //     console.log( H + 23 , M - 45);
    // }
}

