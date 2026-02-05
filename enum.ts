enum Month{
"January"=1,
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
}
console.log(Month)
console.log(Month.December) //12
console.log(Month[12]) //December

const enum Role{Admin="ADMIN",User="USER",Guest="GUEST"}
console.log(Role.Admin)
const enum Status {
  Pending,
  Approved
}
console.log(Status.Pending)
console.log(Status["Pending"])