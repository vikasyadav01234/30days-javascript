let a=10
if(a>=0){
    if(a>0){
        console.log(`${a} is Positive`);
    }
    else{
        console.log(`${a} is equal to Zero`);
    }
}
else{
    console.log(`${a} is Negative`);

}

let age=10;
if(age>=18){
    console.log(`Your Age is ${age} so you are eligeble for vote`)
}
else{
    console.log(`Your age is ${age} less then 18 you are not eligeble for vote`)
}

let b=10;
let c=23;
if(a>b){
    if(a>c){
        console.log(`${a} is greater then ${b} and ${c}`)
    }
    else{
        console.log(`${c} is greater then ${a} and ${b}`);
    }
}
else{
    if(b>c){
        console.log(`${b} is greater then ${a} and ${c}`);
    }
    else{
        console.log(`${c} is greater then ${a} and ${b}`);
    }
}

let days=8;
switch(days){
    case 1: console.log("SUNDAY");
            break;
    case 2: console.log("Monday");
            break;
    case 3: console.log("Tuesday");
            break;
    case 4: console.log("Wednesday");
            break;
    case 5: console.log("Thursday");
            break;
    case 6: console.log("Friday");
            break;
    case 7: console.log("Saturday");
}

function getGrade(score) {
    switch (true) {
        case score >= 90:
            return 'A';
        case score >= 80:
            return 'B';
        case score >= 70:
            return 'C';
        case score >= 60:
            return 'D';
        default:
            return 'F';
    }
}

const userScore = 87;
const userGrade = getGrade(userScore);
console.log(`Your grade is: ${userGrade}`);

let result = a%2==0?"even":"odd";

console.log(`${a} is a ${result} number`)

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Example usage:
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2019)); // false

