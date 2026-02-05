async function asyncCounter(){
    
    let result=[]
    for (let i=1;i<6;i++){
        await new Promise((resolve)=>setTimeout(resolve,1000))
        console.log(i)
        result.push(i)
    }
return result
    }

asyncCounter().then((res)=>console.log(res)).catch((err)=>console.log(err))