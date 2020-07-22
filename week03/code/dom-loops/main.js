"use strict";

// const ageCheck = (age) => {
//     if (age < 21) {
//         console.log("No drinks for you!")
//     } else {
//         console.log("PARTAY!!!!")
//     }
// }

// // ageCheck(12)
// // ageCheck(21)

// const lengthOutput = (strang) => {
//     return strang.length
// }

// console.log(lengthOutput([1,2,3,4,5,6,7]))

// const quoteFinder = (testString) => {
//     return "winter is coming".indexOf(testString)
// }

// console.log(quoteFinder('is'));

const employee = {
    firstName: 'Teresa',
    lastName: 'Vasquez',
    role: 'instructor',
    accountNumber: '1-8349058340',
    isManager: false,
    titles: ['Sr. Developer', 'Bad Ass'],
    accolade: {
        title: 'Employee of the Year',
        dateEarned: '1/2/2020',
        expires: '12/21/2020',
        isCool: true
    }
}

console.log(employee.firstName)
const keyToCheck = 'accolade';

// console.log(employee[keyToCheck])
console.log(employee[keyToCheck].isCool)
// console.log(employee.accolade.isCool)

// create a function that takes in an employee,
//if the employees firstName starts with an M then add a key=status and value='vip'
//if the employees firstName does not start with an M then add a key=status and value='peasant'


