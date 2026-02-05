let payment:boolean=true;
let ordered:boolean=true;
if(payment){
    console.log("Thank you ")
}
if(!payment){
    console.log("try again we haven't received your money")
}
if(payment&&ordered){
    console.log("Get your orders")
}
if(payment||ordered){
    console.log("make payment if not yet or make order if not yet")
}
function changeStatus(status:boolean):boolean{
    return true

}
console.log(changeStatus(true))
let obj=new Boolean(0)
if(obj){ // in the conditon the object is true  not recommended to use Boolean object
    console.log(obj)
}
