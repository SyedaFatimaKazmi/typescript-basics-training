console.log("ahoy TypeScript!");

const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];

// const mappedPizzas = pizzas.map(function(pizza){
//     return pizza.name.toUpperCase();
// });

// arrow function
const mappedPizzas = pizzas.map((pizza) => {
    // one argument doesnt need (), multiple do
    return pizza.name.toUpperCase();
});

//using implicit return
const mappedPizzas2 = pizzas.map((pizza) => pizza.name.toUpperCase());

console.log(mappedPizzas);
console.log(mappedPizzas2);

const pizza = {
    name: "Blazing Inferno",
    getName: function () {
        console.log(this.name);
    },
};

console.log(pizza.getName());

const pizza2 = {
    name: "Blazing Inferno",
    //getName: () => this.name
};
// -> function doesnt understand scope of this
// definig the type does

const pizza3 = {
    name: "Blazing Inferno",
    getName: () => pizza3.name, // the arrow function doesnt allow this
};

console.log(pizza3.getName());

// DEFAULT FUNCTION PARAMETERS
console.log("\n\n DEFAULR FUNCTION PARAMETERS \n");

function multiply(a: number, b: number = 1) {
    // have to identify "type"
    return a * b;
}
console.log("multiple 2 and 5: ", multiply(2, 5));
console.log("multiple 2 and defaultparam: ", multiply(2));

// OBject LIteral IMprovements
console.log("\n\n OBject LIteral IMprovements \n");

const pizzaa = {
    name: "Pepperoni",
    price: 15,
    // getName: function(){
    //     return this.name;
    // }
    //another way to write
    getName() {
        return this.name;
    },
};
const toppingss = ["pepperoni"];
const order = {
    pizza: pizzaa,
    topping: toppingss,
};
// now we can do
const order2 = { pizzaa, toppingss };
console.log(order2);

function createOrder(pizza: object, toppingss: object) {
    return { pizza, toppingss };
}
console.log(createOrder(pizzaa, toppingss));
console.log(pizzaa.getName());

// REST PARAMETERS
console.log("\n\n REST PARAMETERS\n");

function sumAll(arr: Array<number>) {
    return arr.reduce((prev, next) => prev + next);
}
const sum = sumAll([1, 2, 3, 4, 5]);
console.log("sum: ", sum);

// what if we had indefinite numbers
function SumAll(...arr: Array<number>) {
    console.log(arguments);
    return arr.reduce((prev, next) => prev + next);
}
const sum2 = SumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("sum OF INDEFINITE:  ", sum2);

// SPREAD OPERATOR
console.log("\n\n SPREAD OPERATOR \n");

const topps = ["bacon", "chilli"];
const newtopps = ["pepperoni"];
const allToppings = [...topps, ...newtopps];
console.log("concatenating toppings using spread operator:", allToppings);

// Destructuring arrays and objects
console.log("\n\n Destructuring arrays and objects \n");
function orderagain({ name:pizzaName,toppings}: {name: string; toppings: string[]}) {
    console.log(pizzaName, toppings); // renaming name to pizzaName
    return {pizzaName, toppings};
}

const food = {
    name: "Pizza",
    toppings: ["Pepperoni"],
};

orderagain(food); // Logs: Pizza ['Pepperoni']

const {pizzaName} = orderagain(food);
console.log (pizzaName);


// ARRAYS
const mytoppings = ['pepperoni', 'bacon', 'chilli'];

const [first, second, third] = mytoppings;
console.log(first, second, third);

function logTOppings([a,b,c]:any){
    console.log(a,b,c);
}
logTOppings(mytoppings);

//PRIMITIVE TYPESS IN TYPESCRIPT
console.log("\n\n PRIMITIVE TYPES IN TYPESCRIPT\n ");

let pizzac = 10;
// pizzac = "hey"; // wont work since typescript
const pizzaCost = 10;

const pizzaC: number = 10;
const pizzaT: number = 2;

function calPrice (cost: number, toppings: number): number{
    return cost+1.5 * toppings;
}

console.log(calPrice(pizzaC, pizzaT ));
const cots:number  = calPrice(pizzaC, pizzaT); 
console.log(`Cost of pizza: ${cots}`);

// can also use float interger

// STRING TYPES
console.log("\n\n STRING TYPES\n ");

const coupon: string = 'pizza50%'; //lowercase s in string

function normalizeCoupon(code: string):string{
    return code.toUpperCase();
}

console.log("normalize coupon:", normalizeCoupon(coupon));

const couponMessage : string = `final coupon is ${normalizeCoupon(coupon)}`;
console.log(couponMessage);


// BOOLEAN TYPES
console.log("\n\n BOOOLEANS TYPES\n ");

const pizzaaas: number = 5;
const pizzaaas2: number = 1;
function offerDiscount(order: number): boolean{
    return order >=3;
}
if(offerDiscount(pizzaaas)){
    console.log(`you got discount`);
}else{
    console.log("order more than 3 ");
}

if(offerDiscount(pizzaaas2)){
    console.log(`you got discount`);
}else{
    console.log("order more than 3 ");
}