type ChaiOrder = {
    type: string;
    sugar: number; 
    strong: boolean;
};

/*
function makeChai(order: {type: string; sugar: number; strong: boolean}){
    console.log(order);
}
*/
function makeChai(order: ChaiOrder){
    console.log(order);
}

/*
function serverChai(order:{type:string; sugar:number; strong:boolean}){
    console.log(order);
}
*/
function serverChai(order:ChaiOrder){
    console.log(order);
}

type TeaRecipe = {
    water: number;
    milk: number;
}

// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk = 50;
// }

// Interface: we don't use = in interface
interface CupSize {
    size: "small" | "large"
} 

class Chai implements CupSize{
    size: "small" | "large" = "large";
}

// type Response = { ok: true } | { ok: false }
// class myRes implements Response{
//     ok: boolean = true;
// }

// Literal types
type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType){
    console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
    teaLeaves: 2,
    masala: 1
}

type User = {
    username: string;
    bio?: string; // if bio will come then string otherwise if not came then then also fine.
}

const u1: User = { username: "Sanjeev" };
const u2: User = { username: "Sanjeev", bio: "sanjeevkumar.in"}

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "SanjeevKumar", // it will get add only one time, later we can't change it. because it's readonly mode. but one time we have set it.
    version: 1
}

// cfg.appName = "NewSanjeevKumar"
// if we try to this then it's show error because we are reassigning the value, it's readonly mode soo only one time we can set value.