// first way to assign the value to readonly property
class Student{
    readonly x:number=3

}
let student=new Student();
console.log(student.x)
/*student.x=21 */ //Error:Cannot assign to 'x' because it is a read-only property.
//another way using constructor to assign a value to readonly property
class Students{
    readonly x: number;
    constructor( x:number){
 this.x=x
    }
}
let student1=new Students(1)

console.log(student1.x);
(student1 as any).x=2
console.log(student1.x)
