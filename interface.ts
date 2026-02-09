interface Person{
    firstName:string,
    lastName:string
}
function getUser(person:Person){
    return `${person.firstName} ${person.lastName}`
}

 let user={
    firstName:"Uwineza",
    lastName:"Gloria"
}
console.log(getUser(user))
//optional
interface Person1{
    firstName:string,
    lastName?:string
}
function getFirstName(person:Person1){
    if(person.lastName){
        return `${person.firstName} ${person.lastName}`
    }
    return `${person.firstName}`
}
console.log(getFirstName({firstName:"Uwineza"}))
//interface which has function member
interface definition{
    greet():string
}
let into:definition={
    greet:()=>{
        return "hello"
    }
}
//nterface extend another interface
interface A{
    name:string
}

interface B extends A{
    age:number
}
function C(elem:B){
    return `${elem.name} and ${elem.age}`
}
console.log(C({name:"Uwineza",age:1}))
