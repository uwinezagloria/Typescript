function Person(name,age){
    this.name=name
    this.age=age
}
let person=new Person("uwineza",20)
console.log(person.name)
//adding method to constructor fucntion
Person.prototype.getDetails=function(){
    return `my name is ${this.name} and am ${this.age} old`
}
console.log(person.getDetails())