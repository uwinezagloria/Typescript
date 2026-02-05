function total(...num:number[]):number{
return num.reduce((acc,curr)=>acc+curr,0)
}
console.log(total(1,2,3,4))
console.log(total())
