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