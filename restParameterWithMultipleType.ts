function combine(...args:(number|string)[]):(number|string)[]{
    let result:(number|string)[]=[]
   let numbers=args.filter((elem)=>typeof(elem)==="number").reduce((acc,curr)=>acc+curr,0)
let strings=args.filter((elem)=>typeof(elem)==="string").reduce((acc,curr)=>acc+curr)
result.push(numbers,strings)
return result
}
console.log(combine(1,2,3,"a","n"))