abstract class Person{
    name:string
    constructor(name:string){
        this.name=name
    }
    abstract display():string
}
class people extends Person{
    constructor(name:string,age?:number){
super(name);
      

    }
    display():string{
return `${this.name}`
}

}
let person=new people("gogo")
console.log(person.name)
console.log(person.display())