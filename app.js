var message = "hello World!";
console.log(message);
//creating heading
var h1 = document.createElement("h1");
h1.textContent = message;
// add the heading the document
document.body.appendChild(h1);
