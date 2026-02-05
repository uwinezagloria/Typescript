let message: string= "hello World!"
console.log(message)
//creating heading
const h1=document.createElement("h1")
h1.textContent=message
// add the heading the document
document.body.appendChild(h1)
