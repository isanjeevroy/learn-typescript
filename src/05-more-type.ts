let response: any = "42";

// Number("42") => it doesn't work in typescript

// type assertion forcefully
let numericLength:number = (response as string).length

// type as object
type book = {
    name: string
}

let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as book

console.log(bookObject)

// input element
const inputElement = document.getElementById("username") as HTMLInputElement 


//
let value:any
value = "Chai"
value = [1,2,3]
value = 2.5
value.toUpperCase() // this will not show error here but while running it will

let newValue: unknown
newValue = "Chai"
newValue = [1,2,3]
newValue = 2.5
//newValue.toUpperCase() // this will show error here itself

// can do using guards
if(typeof newValue ==="string"){
    newValue.toUpperCase();
}

//try catch block

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("Error", error)
}

//
const data:unknown = "chai aur code"
const strData: string = data as string

//type: never
type Role = "admin" | "user" | "superadmin"

function redirectBasedOnRole(role: Role): void{
    if(role ==="admin"){
        console.log("Redirecting to admin dashboard");
        return;
    }
    if(role ==="user"){
        console.log("Redirecting to user dashboard")
        return;
    }

    role;
}

function neverReturn():never{
    while(true){}
}