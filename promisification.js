function fetchData(){
    return new Promise((resolve,reject)=>{
        let data="Data fetched successfully!"
        setTimeout(()=>{
       resolve(data)
        },1000)
    })
}
fetchData().then((res)=>console.log(res)).catch((err)=>console.log(err))