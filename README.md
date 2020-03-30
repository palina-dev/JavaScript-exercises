***Even Last***
```
function evenLast(data) {
    return data.filter((item, i) => i % 2 === 0).reduce((prev, cur) => prev + cur, 0) * data[data.length - 1] || 0;
}
evenLast([0, 1, 2, 3, 4, 5]); // (0+2+4)*5 = 30
```
