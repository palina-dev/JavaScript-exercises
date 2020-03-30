***Even Last***
```
function evenLast(data) {
    return data.filter((item, i) => i % 2 === 0)
    .reduce((prev, cur) => prev + cur, 0) * data[data.length - 1] || 0;
}

evenLast([0, 1, 2, 3, 4, 5]); // (0+2+4)*5 = 30
```
***Index Power***
```
function indexPower(array, n) {
    for (let i = 0; i < array.length; i++) {
        if (i === n) {
            let m = array[n]**n;
            return m;
        }
    }
    if (array[i] !== n) {
        return -1;
    }
}

console.log(indexPower([1, 2, 3, 4], 2));

function indexPower2(array, n) {
    return Math.pow(array[n], n) || -1;
}

console.log(indexPower2([1, 2, 3, 4], 2));
```
***Correct Sentence***
```
function correctSentence(text) {
    text = text[0].toUpperCase() + text.slice(1);
    if (!text.endsWith('.')) {
        return text + '.';
    }
    return text;
}

correctSentence("greetings, friends"); // "Greetings, friends."
correctSentence("Greetings, friends"); // "Greetings, friends."
correctSentence("Greetings, friends."); // "Greetings, friends."

function correctSentence2(text) {
    return text[0].toUpperCase() + text.replace(/\.?$/, '.').slice(1);
}

correctSentence2("greetings, friends"); // "Greetings, friends."
correctSentence2("Greetings, friends"); // "Greetings, friends."
correctSentence2("Greetings, friends."); // "Greetings, friends."
```
***Digits Multiplication***
```
function digitsMultip(data) {
    return parseInt(data.toString().replace(/0+/g, '').split('').reduce((multiple, current) => multiple * current));
}

console.log(digitsMultip(123405));
```
***FizzBuzz***
```
function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "Fizz Buzz";
    }
    if (number % 3 === 0) {
        return "Fizz";
    }
    if (number % 5 === 0) {
        return "Buzz";
    }
    return number;
}

fizzBuzz(10);

function fizzBuzz2(data) {

    switch (data) {

        case ((Math.ceil(data / 3) * 3) && (Math.ceil(data / 5) * 5)):
            return "Fizz Buzz";

        case (Math.ceil(data / 3) * 3):
            return "Fizz";

        case (Math.ceil(data / 5) * 5):
            return "Buzz";

        default:
            return String(data);
    }
}

fizzBuzz2(10);
```
***Multiply***
```
function multiply(a, b) {
    return a*b;
}

multiply(5,5);

const multiply = (a, b) => Math.imul(5, 5);

multiply();
```
***Say Hi***
```
function sayHi(name, age) {
    return `Hi. My name is ${name} and I'm ${age} years old`;
}

sayHi("Alex", 32);
```
***Second Index***
```
function secondIndex(text, symbol) {
    let indices = [];
    let arrStr = text.split('');
    let idx = arrStr.indexOf(symbol);
    while (idx !== -1) {
        indices.push(idx);
        idx = arrStr.indexOf(symbol, idx + 1);
    }
    return indices[1];
}

secondIndex("sims", "s");
```
***Secrete Message***
```
//new RegExp(/^[A-Z]/)
function findMessage(data) {
    return data.replace(/[^A-Z]/g, '');
}

findMessage("How are you? Eh, ok. Low or Lower? Ohhh."); //"HELLO"
```
