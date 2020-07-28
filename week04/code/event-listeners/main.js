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

// console.log(callbackFunction('1', functionOne));
// console.log(callbackFunction('2', functionTwo));

let myBtn = document.getElementById('main-btn');
// console.log(myBtn);

const otherBtn = document.querySelector('#main-btn');

const youClickedMe = ()=> {
    console.log("You clicked me!")
}

otherBtn.addEventListener('click', youClickedMe)