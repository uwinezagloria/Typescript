class Person{
    ssn:number
    firstName:string
    lastName:string
    constructor(ssn:number,firstName:string,lastName:string){
        this.ssn=ssn
        this.firstName=firstName
        this.lastName=lastName
    }
    getFullName():string{
        return `${this.firstName} and ${this.lastName}`
    }
}
let person=new Person(123,"Gloria","Uwineza")
console.log(typeof(person))
console.log(person.getFullName())