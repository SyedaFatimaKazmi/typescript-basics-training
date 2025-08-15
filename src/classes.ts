// ========classes usecase example========
/*function newPizza(name: string){
    this.name = name;
    this.toppings = [];
}

//strict false for this example to work
newPizza.prototype.addTopping = function addTopping(topping: string){
 this.toppings.push(topping);
}

const mypizz = new newPizza ('pepperoni');
mypizz.addTopping('pepper');
console.log(mypizz);
*/
// TO IMPROVE THIS use class

class newPizza2{
    private name: string;  // declare property
    toppings: string[] = [];
    constructor(name: string){
        this.name = name;
    }
    addTopping(topping:string){
        this.toppings.push(topping);
    }
    
}

let aPIzza = new newPizza2("bbq");
aPIzza.addTopping("chicken");
//console.log(aPIzza.name, aPIzza.toppings); -> wont work since name is private
console.log(aPIzza.toppings);

//===========PUBLIC AND PRIVATE MEMBERS===========
// ========READONLY MEMBERS=============
class SIZES {
    constructor(protected sizes: string[]){}
    set availablesizes (sizes :string[]){
        this.sizes = sizes;
    }
    get availablesizes(){
        return this.sizes;
    }
}


class Meal extends SIZES { // INHERITANCE
    //name: string;
    items: string[] = [];
    price: number = 100;
    // constructor (namee:string){
    //     this.name = namee;
    // }
    // bette rway now to make a private member and not waste space initializing it

    constructor(private name: string, readonly name2: string, public sizes: string[]){
        super(sizes);
    }
    getName (){
        return this.name;
    }
    setName(newname: string){
        this.name = newname;
    } //=> these are functiosn only , below ive made correct setter and getter
    
    set priceofmeal (p : number){
        this.price =  p;
    }
    get priceofmeal (){
        return this.price;
    }
    get nameofmeal(){
        return this.name2;
    }

    addItems(item : string){
        this.items.push(item);
    }
}

let meal = new Meal ("dinner", "night food", ['small', 'large']);
// console.log(meal.name) // doesnt work since private member;
console.log(meal.getName());
meal.addItems("rice");
console.log(meal.items); // works cuz items is public


// doesnt work since its a readonly member
// meal.name2 = "new name";

console.log(meal.name2);
console.log(meal.nameofmeal);
meal.priceofmeal = 2;
console.log(meal.priceofmeal);

console.log(meal.availablesizes);


// ABSTRACT CLASSES
// cant instantiate abstract class
abstract class SIZES2{
    constructor(public sizes: string[]){}
    set availablesizes (sizes :string[]){
        this.sizes = sizes;
    }
    get availablesizes(){ 
        return this.sizes;
    }
}
// cant do this since abstract
// new SIZES2(['small']); 

// PROTECTED MEMBERS
// protected members can only be accessed by derived classes

// interface contracts with implements
// cant add private & protected in interface
interface sizesinterface{
    // private/protected sizes: string;
    availablesizes: string[];
}

abstract class newsize implements sizesinterface{
    constructor(private sizes: string[]){}
    set availablesizes (sizes :string[]){
        this.sizes = sizes;
    }
    get availablesizes(){ 
        return this.sizes;
    }   
}

interface MealInterface {
    items: string[];
    readonly name: string;
    price: number;
    getName(): string;
    setPrice(p : number): void;
    addItems(item: string): void;
}



class newmeal implements MealInterface{
    public items: string[];
    public price: number;

    constructor(readonly name: string, items: string[], price: number){
        this.items = items;
        this.name = name;
        this.price = price;
    }
    getName(): string {
        return this.name;
    }
    setPrice(p: number): void {
        this.price = p;
    }
    addItems(item: string): void {
        this.items.push(item);
    }

}

//==STATIC PROPERTIES & METHODS==

const date = new Date();
console.log(date.getFullYear()); // we have to create date instance then use function

class COUPON{
    static allowed = ['peperoni', 'blazing'];
    static create (percentage: number){
        return `PIZZA _ RESTAURANT ${percentage}`;
    }
}
console.log(COUPON.allowed);
console.log(COUPON.create(25));
// can access static members and classes without creating an instance