function square(number){

    console.log('value of the number parameter',number);
    const borgo = number * number;
    console.log('square of the given number is', borgo);

}

square(5);
console.log('---------------');
square(10);
square(40);
square(100);

// another function

function add(num1,  num2, num3, num4, num5){
    const sum = num1 + num2 + num3 + num4 + num5;
    console.log('the numbers are',num1, num2, num3, num4, num5);
    console.log('addition of the numbers are',sum);
}

add(3,5,6,3,5);
add(10,25,52,45,48);