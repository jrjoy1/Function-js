const heights = [12, 45, 65, 85, 75, 23, 52, 10]

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){         //-----when max = (num > max)-----//
            min = num;
        }
    }
    return min;
}

const min = getMin(heights);
console.log('the min number is', min);