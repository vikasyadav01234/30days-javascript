for(let i=0;i<=10;i++){
    console.log(i);
}
for(let i=1;i<=10;i++){
    console.log(`${i}*5 is =${i*5}`);
}
let i=0;
let a=0;
while(i<=10){
    a=a+i;
    console.log(`sum of ${a}+${i}=${a}`);
    i++;
}
let b=10;
while(b>0){
    console.log(b);
    b--;
}
let c=1;
do{
    console.log(c);
    c++;
}
while(c<=5)


function calculateFactorial(num) {
    let fact = 1;
    let i = 1;

    do {
        fact *= i;
        i++;
    } while (i <= num);

    return fact;
}

// Example usage:
const numberToCalculate = 5;
const result = calculateFactorial(numberToCalculate);
console.log(`Factorial of ${numberToCalculate} is: ${result}`);


function printPattern(rows) {
    for (let i=1;i<=rows;i++){
        let pattern='';
        for(let j=1;j<=i;j++){
            pattern+='*';
        }
        console.log(pattern);
    }
}

// Example usage:
const numberOfRows = 5;
printPattern(numberOfRows);

for(i=0;i<=10;i++){
    if(i==5)
        continue;
    console.log(i);
}
for(i=1;i<=10;i++){
    if(i==7)
        break;      
    console.log(i);
}