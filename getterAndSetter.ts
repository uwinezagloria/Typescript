class Person{
    private _age:number;
    private _name:string;
    constructor(age:number,name:string){
        this._age=age
        this._name=name
    }
    //setter
    public set age(value:number){
        if(this._age<0){
            throw new Error("invalid age")
        }
        this._age=value
    }
    public get age():number{
        return this._age
    }

}
let person=new Person(12,"Uwineza")
console.log(person.age)

