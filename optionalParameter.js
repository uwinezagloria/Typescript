function add(n1, n2, n3) {
    if (n3 !== undefined) {
        return n1 + n2 + n3;
    }
    else {
        return n1 + n2;
    }
}
console.log(add(2, 3, 5));
console.log(add(2, 3));
