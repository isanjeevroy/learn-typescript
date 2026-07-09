const chaiFlavours: string[] = ["Masala", "Adrak"]

const chaiPrice: number[] = [10, 12]

const rating: Array<number> = [4.5, 5.0]

// type of chai
type Chai = {
    name: string;
    price: number
}

// array of chai data type
const menu: Chai[] = [
    {name: "Adrak", price: 20},
    {name: "Masala", price: 25},
]

// readonly array
const cities: readonly string[] = ["Delhi", "Jaipur"]
//cities.push("Push") // we can't push the new array elements

//multi-dimentional array
const table: number[][] = [
    [1,2,3],
    [4,5,6]
]

//Tuples
let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]

let userInfo: [string, number, boolean?]
userInfo = ["Sanjeev", 100]
userInfo = ["Sanjeev", 100, true]

//readonly tuples
const location: readonly [number, number] = [28.66, 32.22]

//types tuples
const chaiItems: [name: string, place: number] = [ "Masala", 25 ]

//enum
enum cupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = cupSize.LARGE

enum status {
    PENDING = 100,
    SERVED, // 101=> automatcially gets
    CANCELLED //102=> automatcially gets
}

enum chaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: chaiType){
    console.log(`Making: ${type}`)
}
makeChai(chaiType.GINGER)
// makeChai("masala")

// enum practically uses with same data type
enum randomEnum {
    ID = 1,
    NAME = "chai"
}

// enum , we use to keep constant only but also can use const keyword
const enum sugar {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = sugar.HIGH

//
let t: [string, number] = ["chai", 10]
t.push("extra") //["chai", 10, "extra"]
