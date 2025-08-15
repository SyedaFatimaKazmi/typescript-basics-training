// TYPESCRIPT TYPES 

// any type
console.log("\n TYPE SCRIPT TYPES : ANY\n\n");

// avoid using any type

let couponN; // automatically assigns any type
couponN = 25;
console.log("number: ", couponN);

couponN = "String";
console.log("string now: ", couponN);

couponN = true;
console.log("boolean now: ", couponN);

// works since its type : any

// implicit & explicit types
console.log("\n IMPLICIT & EXPLICIT TYPES \n\n");

let implicitCoupon = 'pizza25';
let explicit: string = 'pizza25';

// implicitCoupon = 24; // wont work


// VOID type
console.log("\n VOID TYPE \n\n");
// done on a function

let selectedTopping: string = 'pepperoni';

function selectTopping(topping: string){ // function type = void implicitly assigned
    selectedTopping = topping;
    //return selectedTopping;
} // on a return statement wont give error and assume return type based on return value


selectTopping('bacon');
console.log(selectedTopping);


function selectTopping2(topping: string) :void { // function type = void implicitly assigned
    selectedTopping = topping;
    // return selectedTopping; // will give error since the return type is void
}

// NEVER type
console.log("\n NEVER TYPE \n\n");
// tells a value will "never" occur

// == uncomment ==
// function orderError(error: string) : never{
//     throw new Error(error);
//     // never going to return a value!
//     // hence we add :never return type else void type is assigned
//     // never funtcions cant have a reachable endpoint
// }
// orderError("something went wrong");

// NULL & UNDEFINED type
console.log("\n NULL & UNDEFINED TYPE \n\n");
// make strict false in tsconfig for this example

let couponA: string | null  = 'pizza25';
function removeCouponA(): void{
    couponA = null;
}
console.log(couponA);
removeCouponA();
console.log(couponA);

// | <- is the union type that allows us to give var multiple types
let couponB: string | undefined = "yay 50";
function removeCouponB(): void{
    couponB = undefined;
}
removeCouponB();
console.log(couponB);

// but this couldnt be like this
// turn "StrictNullChecks" to true

// now - couponA & B cant be assigned NULL and UNdefined beacause theyre string type
// for that to work we have to use type null


// UNION & LITERAL type
console.log("\n UNION & LITERAL TYPES \n\n");

let pizzaSize: string = 'small';
function selectSize(size: any): void{
    pizzaSize = size;
}
selectSize('medium');
console.log(`pizza size : ${pizzaSize}`);
// but since we only want small medium and large  we can:

function selectSize2(size: 'small' | 'medium' | 'large'): void{
    pizzaSize = size;
}
selectSize2('large'); // any value other than three s m l will give error
console.log(`pizza size : ${pizzaSize}`);

// FUNCTION type
console.log("\n FUNCTION TYPES \n\n");

function sumOrdder(price: number, quantity: number): number{
    return price*quantity;
}
let sumOrdderArrowFUnc = (price: number, quantity: number): number => {
    return price*quantity;
}

const sumO = sumOrdderArrowFUnc(25,2);
console.log(`total sum: ${sumO}`);

// we can declare function header
let sumofOrder: (price: number, quantity: number) => number;

//definition
sumofOrder = (x,y) => x*y;

const val = sumofOrder(10,3);
console.log(`predeclared function: ${val}`);

// can also do
//  let sumofOrder: (price: number, quantity: number) => number = (x,y) => x*y;


// FUNCTIONAL AND OPTIONAL ARGUMENTS
console.log("\n FUNCTIONAL AND OPTIONAL ARGUMENTS \n\n");

let bill: (price: number, quantity?: number) => number;

bill = (x,y)=>{
    if(y){
        return x*y;
    }
    return x;
}

const myBill = bill(21); // how to tell function that second : quantity is optional?
                // add a questionmark next to quantity
console.log(`my bill = ${myBill}`);

// typed functions / default parameters

console.log("\n typed functions / default parameters \n\n");

let bill2: (price: number, quantity?: number) => number;
// default param
bill2 = (x,y = 1)=>{
    return x*y;
}
console.log(`my bill now with defaukt params: ${bill2(61)}`);

// OBJECT TYPES
console.log("\n OBJECT TYPES \n\n");

let chicken;

chicken = {
    name: 'bbq',
    price: 20
}
// how can we give chicken a structure? 

let chicken2 : {nameo: string, price: number, getName(): string} = {
    nameo : 'bbq',
    price : 29,
    getName() {
        return chicken2.nameo;
    },
}

console.log(`my chicken name is: ${chicken2.getName()}`)

// ARRAY TYPES
console.log("\n ARRAY TYPES \n\n");

const sizes = ['small', 'medium', 'large'];

let sizes2 : string[];

sizes2 = ['small', 'medium', 'large'];

let topping : string[];
topping = ['1', '2', '3'];

// can also do
let topping2 : Array<string>;
topping2 = ['1', '2', '3'];


// TUPLES FOR ARRAY 
console.log("\n TUPLE FOR ARRAY  \n\n");

const p = ['pepperoni', 20, '', 10, true]; // tuple type data structure
let p1 : [string, number, boolean, number];
// p1 = ['pepperoni', 20, true]; // gives error since no number
p1 = ['pepper', 10, true, 10];

// TYPE ALLIASES 
console.log("\n TYPE ALLIASES \n\n");

// can assign any type to an allias
let pizzaSIZE : 'small' | 'medium' |'large' = 'small';

const selectSizee = (size: 'small' | 'medium' |'large') =>{
    pizzaSIZE = size;
}
selectSize('small');

/// BUT IF U SEE CLOSELY WE'RE REPEATING HERE
// HENCE DEFINE A TYPE
type sizee = 'small' | 'medium' |'large';
let pizzaSZOE2 : sizee = 'small';
const selectSIZEE = (size: sizee)=>{
    pizzaSZOE2 = size;

}
selectSIZEE ('large');

console.log(`selected sizE: ${pizzaSZOE2}`);

// can also export this  to use elsewhere

type Callback = (size: sizee) => void;
const selectSIZEE33 : Callback = (x)=>{
    pizzaSZOE2 = x;

}
selectSIZEE33 ('medium');
console.log(pizzaSZOE2);

// TYPE ASSERTIONS 
console.log("\n TYPE ASSERTIOSN \n\n");
type pza = {name: string, toppings: number};

const pz: pza = {name: 'Blazing inferno', toppings: 5};
const serialized = JSON.stringify(pz);

function getNameFromJSON(obj: string){
    //return (<pza>JSON.parse(obj)).name;
    return (JSON.parse(obj) as pza).name;
}

console.log(getNameFromJSON(serialized));



// CREATING INTERFACES 
console.log("\n CREATING INTERFACES \n\n");
type PZA = {
    name: string,
    sizes: string[]
};

let po : PZA;
function createPizza (name: string, sizes: string[]){
    return{
        name,
        sizes
    };
}

po = createPizza ('pepperoni', ['small', 'medium']);

console.log(po);
// better approach to this is an interface

interface PZA1 {
    name: string,
    sizes: string[],
    getAvailableSIzes(): string []
};

let pi : PZA1;
function createPizza2 (name: string, sizes: string[]): PZA1{
    return{
        name,
        sizes, 
        getAvailableSIzes(){
            return this.sizes;
        }
    } ;
}

pi = createPizza2 ('pepperoni', ['small', 'medium']);

console.log(pi.getAvailableSIzes());

// EXTENDING INTERFACES
console.log("\n\nEXTENDING INTERFACES \n");

interface Sizes{
    sizes: string[];
}
interface PIZZA extends Sizes{
    name: string,
//     sizes: string[], dont need this as pizza extends sizes gets us size
    // optional property     
    toppings?: number,
    getSizes() : void;
    [key: number]: string; // indexing
}

let mypizza : PIZZA;

function CREATEPIZZA (name: string, sizes: string[]): PIZZA{
    return{ // we made topppings optional hence not necessary to 
        name,
        sizes, 
        getSizes(){
            return this.sizes;
        },
    };
}

mypizza = CREATEPIZZA ('pepperoni', ['small', 'medium']);
mypizza.toppings = 1;

console.log(mypizza.getSizes());
console.log(mypizza.toppings);

mypizza[0] = "xyz";
// beefore adding index signature this cant be used
console.log(mypizza[0]);

