function total() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(total(1, 2, 3, 4));
console.log(total());
