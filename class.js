var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " and ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person(123, "Gloria", "Uwineza");
console.log(typeof (person));
console.log(person.getFullName());
