function getUser(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var user = {
    firstName: "Uwineza",
    lastName: "Gloria"
};
console.log(getUser(user));
function getFirstName(person) {
    if (person.lastName) {
        return "".concat(person.firstName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName);
}
console.log(getFirstName({ firstName: "Uwineza" }));
var into = {
    greet: function () {
        return "hello";
    }
};
function C(elem) {
    return "".concat(elem.name, " and ").concat(elem.age);
}
console.log(C({ name: "Uwineza", age: 1 }));
