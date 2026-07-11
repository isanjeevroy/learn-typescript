// part1:interface
interface Chai {
    flavor: string
    price: number
}

const masala:Chai = {
    flavor: "masala",
    price: 30
}

interface Shop {
    readonly id: number
    name: string
}

const s: Shop = { 
    id: 1,
    name: "Chaicode caffe"
}

interface DiscountCalculator {
    (price: number): number
}

const apply50: DiscountCalculator = (p) => p*0.5

interface TeaMachine{
    start(): void
    stop(): void
}

const machine: TeaMachine = {
    start() {
        console.log("start");
    },

    stop(){
        console.log("stop");
    }
}

interface ChaiRatings {
    [flavor: string]: number
}

const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.5,
}

// Interface gets merged

// coming from libraries
interface User {
    name: string
}

// I have created
interface User {
    age: number
}

// now it will expect to satify both interface
const u: User = {
    name: "Sanjeev",
    age: 24
}

interface A {a: string}
interface B {b: string}

interface C extends A, B {}


// Part2: Generics
// We can make generics to type, interface , class etc..
function wrapInArray<T>(item: T): T[]{
    return [item]
}

wrapInArray("masala")
wrapInArray(24)
wrapInArray({flavor: "Ginger"})

function pair<A, B>(a:A, b:B): [A,B]{
    return [a, b]
}

pair("masala", "test")
pair("masala", 20)
pair("masala", {flavor: "Ginger"})

// Generic interace

interface Box<T> {
    content: T
}

const numberBox: Box<number> = { content: 10 }
const numberBoxCup: Box<string> = { content: "10" }

interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: { flavor: "masala"}
}

