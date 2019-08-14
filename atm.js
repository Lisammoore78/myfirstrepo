// atm
// lisa 13/08/19

let Pin = 8888 
let balance = 250 
let withdraw = 50
const correctPin = ()=> {

    if (Pin) {
        console.log ("retry");
        Pin = false;
     } else {
         console.log ("correct");
         Pin = true ;
     }
}  
if (withdraw <= balance){
    console.log ("cash dispensed");
}else {
    console.log ("not enoughfunds");
} 
