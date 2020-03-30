function digitsMultip(data) {
    return parseInt(data.toString().replace(/0+/g, '').split('').reduce((multiple, current) => multiple * current));
}
console.log(digitsMultip(123405));