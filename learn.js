// const numbers = [1, 2, 3, 4, 5];
// let numbersTimesTen = numbers.map((number) => number * 10);

// console.log(numbersTimesTen);

// const numbers = [1, 2, 3, 4, 5, 10, 70, 80, 90, 100];
// let numbersGreaterThan50 = numbers.filter((number) => number >= 50);

// console.log(numbersGreaterThan50);

// let sum = numbers.reduce((sum, number) => (sum + number),0);

// console.log(sum);

const students = [
    { name: "Stephen", age: 24 },
    { name: "Alice", age: 19 },
    { name: "Jordan", age: 29 },
    { name: "Julie", age: 21 },
    { name: "Chris", age: 26 }
]

let averageAge = students.map(s => s.age).reduce((s, a) => s + a)/students.length;

console.log(averageAge);

