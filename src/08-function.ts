// params type
function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`)
}

makeChai("Masala", 2)

// return type
function getChaiPrice():number{
    return 25
}

//
function makeOrder(order: string){
    if(!order) return null
    return order
}

//Logger Functions // no return anything
function logChai(): void{
    console.log("Chai is Ready")
}

// if paramas came then string otherwise nothing
//Way 1
/*
function orderChai(type?: string){

}
*/

//Way 2
function orderChai(type: string = "Masala"){

}

//
function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large"
}): number{
    return 4
}