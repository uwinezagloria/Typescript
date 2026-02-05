let value:unknown;
value=1
value="hy"
let result:unknown
result=[1,2,3]
// you can not perform operation on a value with type unknown ex: result.reduce((acc:number,curr:number)=>acc+curr,0)
// we solve this by using type assertion to tell typescript the type of result
let sum=(result as number[]).reduce((acc:number,curr:number)=>acc+curr,0)
console.log(sum)