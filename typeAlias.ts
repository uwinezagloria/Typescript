type Name=string ;//creating a type alias
let firstName:Name;
let lastName:Name;
firstName="Uwineza"
lastName="Gloria"
console.log(firstName+" "+lastName)
//object 
type person={
    name:string,
    age:number
}
let Person:person={
    name:"Uwineza Gloria",
    age:1
}
console.log(Person)
//union type
type either=number|string
let a:either=3
let b:either="john"
console.log(a)
console.log(b)
//intersection 
type personal={
    name:string,
    age:number
}
type contact={
    email:string
}
type Candidate=personal & contact;
let candidate:Candidate={
    name:"John",
    age:2,
    email:"John@gmail.com"
}
console.log(candidate)
