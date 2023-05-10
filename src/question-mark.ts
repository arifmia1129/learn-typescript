const myAge:number = 17;

const isAdult = myAge >= 18 ? "Yes" : "No";

console.log(isAdult);

// nulish coalesnace operator

const isAuthenticatedUser = "";

const userName = isAuthenticatedUser ?? "Guest";

console.log({userName});


type Employee = {
    name:string,
    id:number,
    address:{
        city:string,
        home?:string
    }
}

const employee:Employee = {
    name:"Arif",
    id:123,
    address:{
        city:"Gaibandha"
    }
}

const employeeHome = employee?.address?.home ?? "No Home";

console.log({employeeHome});