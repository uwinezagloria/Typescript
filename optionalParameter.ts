function add(n1:number,n2:number,n3?:number): number{
    if(n3!==undefined) {
        return n1+n2+n3
    }
    else{
return  n1+n2
    }
}
console.log(add(2,3,5))
console.log(add(2,3))