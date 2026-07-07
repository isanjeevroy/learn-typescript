function getLaptop(brand: string | number){
    if(typeof brand === 'string'){
        return `Buying ${brand} laptop...`;
    }

    return `Laptop Order: ${brand}`
}

function buyLaptop(msg?: string){
    if(msg){
        return `Buying ${msg}`;
    }
    return `Buying default Asus Laptop`;
}

function orderLaptop(size:"14inch" | "15inch" | number){
    if(size === "14inch"){
        return `14 inch laptop...`
    }

    if(size === "15inch"){
        return `15 inch laptop...`
    }

    return `Laptop Order #${size}`
}

class AsusLaptop{
    sell(){
        return `Selling asus laptop`
    }
}

class HpLaptop{
    sell(){
        return `Selling asus laptop`
    }
}

function sell(laptop: AsusLaptop | HpLaptop){
    if(laptop instanceof AsusLaptop){
        return laptop.sell();
    }
}

// Narrow
type laptopOrder = {
    model: string,
    core: number
}

function isLaptopOrder(obj:any):obj is laptopOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.model === "string" &&
        typeof obj.core === "number"
    )
}

function sellLaptop(item:laptopOrder | string){
    if(isLaptopOrder(item)){
        return `Selling ${item.model} laptop of ${item.core} core`
    }
    return `Selling custom laptop: ${item}`
}

// define type (it usually happens in prod)
type lenovoLaptop = {type:"lenovo", battery:number}
type appleLaptop = {type:"apple", feature:number}
type realmeLaptop = {type:"realme", camera:number}

type Laptop = lenovoLaptop | appleLaptop | realmeLaptop

function makeLaptop(sell: Laptop){
    switch (sell.type) {
        case "lenovo":
            return `lenovo laptop`
        case "apple":
            return `lenovo apple`
        case "realme":
            return `lenovo realme`
    
    }
}

function fun(laptop: appleLaptop | lenovoLaptop ){
    if("battery" in laptop){

    }
}

//any type, but now days we use unknown
function isStringArray(arr: unknown): arr is string[]{

}