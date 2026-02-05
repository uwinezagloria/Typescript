let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("promise is resolved")
    },5000)
})
async function handlingPromise(){
    let promise=await p
    console.log(promise)
    console.log("hello world")
    let promise2=await p
    console.log("promise 2")
    console.log(promise2)
    
    
}u
handlingPromise()
