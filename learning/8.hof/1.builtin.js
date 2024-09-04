// forEach => tidak mengcopy data aslinya / tidak bisa mengembalikan nilai

// const numbers = [1, 2, 3, 4, 5];

// const doubleNumbers = []

// numbers.forEach((number) => {
//   doubleNumbers.push(number * 2)
// });

// console.log(doubleNumbers)

// map => meng-copy data aslinya / mengembalikan nilai

// const doubleNumbers = numbers.map((number) => {
//     return number * 2
// });

// console.log(doubleNumbers)
// console.log(numbers)

// filter => kalau true dimasukkan nilainya

// const oddNumbers = numbers.filter((number) => {
//     if(number % 2 === 1) {
//         return true
//     } else {
//         return false
//     }
// })

// console.log(oddNumbers)

// sistem seleksi kandidat karyawan
// const listEmployees = [
//   {
//     name: "A",
//     score: 70,
//     sallaryExpectation: 500,
//   },
//   {
//     name: "B",
//     score: 80,
//     sallaryExpectation: 1000,
//   },
//   {
//     name: "C",
//     score: 30,
//     sallaryExpectation: 200,
//   },
// ];

// const passEmployees = listEmployees.filter((employee) => {
//   if (employee.score > 70 && employee.sallaryExpectation < 5000) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(passEmployees)

// reduce => accumulator (sum)
// const numbers = [1, 2, 3, 4, 5];

// const sumOfNumbers = numbers.reduce((previousNumber, currentNumber) => {
//     return previousNumber * currentNumber
// }, 1)

// console.log(sumOfNumbers)

// const findNumber = numbers.find((number) => {
//   if (number === 3) {
//     return true;
//   }
// });

// console.log(findNumber);
