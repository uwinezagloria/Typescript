function summation(a, b, c) {
    if (typeof (c) !== "undefined") {
        return a + b + c;
    }
    return a + b;
}
console.log(summation(2, 3));
console.log(summation(3, 4, 5));
