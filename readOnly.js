// first way to assign the value to readonly property
var Student = /** @class */ (function () {
    function Student() {
        this.x = 3;
    }
    return Student;
}());
var student = new Student();
console.log(student.x);
/*student.x=21 */ //Error:Cannot assign to 'x' because it is a read-only property.
//another way using constructor to assign a value to readonly property
var Students = /** @class */ (function () {
    function Students(x) {
        this.x = x;
    }
    return Students;
}());
var student1 = new Students(1);
console.log(student1.x);
student1.x = 2;
console.log(student1.x);
