// console.log("test own site");

//More Problems

// 01. Create a while loop which prints values from 10 to 50
// 02. Create a for loop which prints values from 20 to 60
// 03. Create a function of adding two numbers. 
// 04. Create a function which returns a for loop which takes two parameter one is initial value & final value to return the list of number from initial to final value. (shown in class)
// 05. Create a function which return whether the year is leap year or not
// 06. Create a function which return whether the temperature is hot or cold (30 <=  is hot, 25 >= is cold , anyother value is normal)
// 07 .Create a function which returns whether the number is odd or even




// #01. Create a while loop which prints values from 10 to 50

let num = 10;
while (num <= 50) {
    console.log(num);
    num++
};

// #02. Create a for loop which prints values from 20 to 60

for (let count = 20; count <= 60; count++) {
    console.log(count);
}

// #03. Create a function of adding two numbers.

function add(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}

add(20, 20)


// #04. Create a function which returns a for loop which takes two parameter one is initial value & final value to return the list of number from initial to final value. (shown in class)

function printLoop(initialvalue, finalValue) {
    for (let count = initialvalue; count <= finalValue; count++) {
        console.log(count);
    }
};

printLoop(10, 15);
printLoop(10, 20);


// #05. Create a function which return whether the year is leap year or not

function isLeapyear (year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log(year, "Year is leap year");
    }
    else{
        console.log(year, "Year is not a Leap Year");
    }
};

isLeapyear(1941)


// #06. Create a function which return whether the temperature is hot or cold (30 <=  is hot, 25 >= is cold , anyother value is normal)



// #07 .Create a function which returns whether the number is odd or even
