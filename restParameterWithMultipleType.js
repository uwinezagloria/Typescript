function combine() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = [];
    var numbers = args.filter(function (elem) { return typeof (elem) === "number"; }).reduce(function (acc, curr) { return acc + curr; }, 0);
    var strings = args.filter(function (elem) { return typeof (elem) === "string"; }).reduce(function (acc, curr) { return acc + curr; });
    result.push(numbers, strings);
    return result;
}
console.log(combine(1, 2, 3, "a", "n"));
