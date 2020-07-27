'use strict';

const functionOne = (arg) => {
    return `This is ${arg}`;
}

const functionTwo = (arg) => {
    return `This is ${arg}`;
}

const callbackFunction = (str, func) => {
    return func(str);
}

console.log(callbackFunction('1', functionOne));
console.log(callbackFunction('2', functionTwo));