/*
Q.1.Positive or Negative number
let num = 23;
if (num > 0) {
    console.log(`${num} is a positive number`);
} else {
    console.log(`${num} is a negative number`);
}

Q.2.Even or Odd number
let num = 22;
if (num % 2 === 0) {
    console.log(`${num} is a even number`);
} else {
    console.log(`${num} is a odd number`);
}

Q.3.Sum of First N Natural numbers
let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log(sum)

Q.4.Sum of N natural numbers
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log(sum);

Q.5.Sum of numbers in a given range
let firstRange = 2;
let secondRange = 8;
let sum = 0;
for (let i = firstRange; i <= secondRange; i++) {
    sum = sum + i;
}
console.log(sum);

Q.6.Greatest of two numbers
let num1 = 23;
let num2 = 73;
if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else {
    console.log(`${num2} is greater than ${num1}`);
}

Q.7.Greatest of the Three numbers
let num1 = 122;
let num2 = 1211;
let num3 = 3421;
if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is a greater number`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is a greater number`);
} else {
    console.log(`${num3} is a greater number`);
}

Q.8.Sum of digits of a number
let num = 12345;
let sum = 0;
while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
}
console.log(sum);

Q.9.Factorial of a number 
let num = 5;
let fac = 1;
let i = 1;
while (i <= num) {
    fac = fac * i;
    i++;
}
console.log(fac);

Q.10.Prime Number
function isPrime(num) {
    if (num < 2) {
        return `${num} is not a prime number`;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return `${num} is not a prime number`;
        } else {
            return `${num} is a prime number`;
        }
    }
}
console.log(isPrime(8));
*/
