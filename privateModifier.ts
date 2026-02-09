class Person{
    private ssn:number
    private firstName:string
    private lastName:string
    constructor(ssn:number,firstName:string,lastName:string){
        this.ssn=ssn
        this.firstName=firstName
        this.lastName=lastName
    }
    getFullName():string{
        return `${this.firstName}  ${this.lastName}`
    }
}
let person=new Person(123,"Uwineza","Gloria")
/*console.log(person.firstName) */ 
//Property 'firstName' is private and only accessible within class 'Person'.