let pin = 8888 
let balance = 250 
let withdraw = 50 
const pinCheck = () => {     
    if (pin) {  
           console.log("Incorrect");  
              pin = false; 
            } else {     
                console.log("Correct"); 
                    pin = true;  
                   }
                 } 
                 if (withdraw <= balance){  
                        console.log("Cash will be dispensed"); 
                    } else {  
               console.log("Not enough funds"); }