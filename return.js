function tenTimes(number){
    const result = number * 10;
    return result;
}

function cutHalf(number){
    const half = number / 2;
    return half;
}

tenTimes(7);

const output = tenTimes(5);
console.log('output', output);

const bigNumber = tenTimes(99);
console.log('output', bigNumber);