function sum() {
    let sumCount = 0;
    return function (number) {
        return sumCount += number;
    }
}

let sumNumber = sum();
console.log(sumNumber(3));
console.log(sumNumber(5));
console.log(sumNumber(20));

