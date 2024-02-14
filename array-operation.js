/**
 * 
 * Objective: write a function to give me the sum of all numbers in an array.
 * 
 * step-1: declare a function
 * step-2: call check wheather the function is called properly
 * step-3: set a parameter(s)
 * step-4: pass the parameter(s), check wheather parameter is passed in a proper format
 * step-5: do the function tasks (step by step)
 */




function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const nums = [4, 2, 1, 6]
const sum = sumOfNumbers(nums);
console.log('sum of numbers is', sum);