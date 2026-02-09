function addition(a:number,b:number):number; //signature 1
function addition(a:string,b:string):string; //signature 2
function addition(a:any,b:any):any{ // one implementation
    if(typeof(a)==="number" && typeof(b)==="number"){
        return a+b
    }
    else if(typeof(a)==="string"&& typeof(b)==="string"){
        return a+b
    }
    throw new Error("invalid argument")
}
console.log(addition(2,3))
console.log(addition("hello","world"))