/*
class Chai {
    flavour: string;
    price: number

    constructor(flavour: string, price: number){
        this.flavour = flavour;
        this.price = price;
    }
}

const masalaChai = new Chai("Ginger",20)
masalaChai.flavour = "masala"

*/

class Chai {
    public flavor: string = "masala"
    private secretIngredients = "cardamon" // 1.writing private

    reveal(){
        return this.secretIngredients
    }
}

class Shop {
    protected shopName = "Chai Corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName
    }
}

class Walet {
    #balance = 100 // 2. this is like private balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Walet()

class Cup{
    readonly capacity: number = 250

    constructor(capacity: number){
        this.capacity = capacity
    }
}

// 
class ModernChai {
    private _sugar = 2 //3. we use _ just to identify that it's private

    get sugar(){
        return this._sugar;
    }

    set sugar(value: number){
        if(value >5 ) throw new Error("Too sweet");
        this._sugar = value
    }
}

const c = new ModernChai()
c.sugar = 3



class EkChai {
    static shopName = "Chaicode caffe"

    constructor(public flavour: string){}
}

console.log(EkChai.shopName);

abstract class Drink {
    abstract make(): void
}

class MyChai extends Drink{
    make(): void {
        console.log("Brewing chai")
    }
}

// 
class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){}
    make(){
        this.heater.heat
    }
}