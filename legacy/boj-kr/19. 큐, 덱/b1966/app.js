function solution(priorities, location) {
    let answer = 0;
    let queue = priorities;

    let target = queue[location];
    let numArray = Array.from({length: queue.length}, (v, i) => i);
    numArray[location] = 'target'


    while(true) {

        if (queue[0] === Math.max(...queue)){
            answer +=1;

            if (numArray[0] === 'target') {
                break;
            } else {
                queue.shift()
                numArray.shift()
            }
        } else {
            queue.push(queue.shift());
            numArray.push(numArray.shift());
        }

    }
    return answer;
}