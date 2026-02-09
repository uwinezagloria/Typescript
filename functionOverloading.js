function addition(a, b) {
    if (typeof (a) === "number" && typeof (b) === "number") {
        return a + b;
    }
    else if (typeof (a) === "string" && typeof (b) === "string") {
        return a + b;
    }
    throw new Error("invalid argument");
}
console.log(addition(2, 3));
console.log(addition("hello", "world"));
