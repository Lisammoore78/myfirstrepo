// practice functions
//lisa moore 13/08/19

const reverseString = (s) =>{
   return s.split("").reverse().join("")
}

console.log("hello world")
console.log(reverseString("hello world"))


const addThreeNumbers = (num1, num2, num3)=>{
    console.log("iam adding your three numbers")
    return num1 + num2 + num3
}

console.log(addThreeNumbers(10,20,30))


const hello = () =>{
    console.log ("hello")
}


function hello2 (){
    console.log("hello")
}


const displayName = (name)=>{
    console.log (name)
}

    displayName("lisa")
    hello()

let coffeeIsGrinding = false
const pressGrindBeans = ()=> { 
    if (coffeeIsGrinding) {
        console.log("stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}
pressGrindBeans();
pressGrindBeans();



const drink = (large, coffee) =>{
    console.log(`making ${large} ${coffee}`);
}

drink("Large","Latte")


const addUp = (num1, num2) => {
    return num1 + num2;
}
addUp(7,3);
console.log(addUp(2,5));


let orderCount = 0;
const takeOrder = (topping, secondtopping) => {
    console.log (`pizza with ${topping} and ${secondtopping}`);
    orderCount++;
}
    takeOrder("ham" , "pineapple")

