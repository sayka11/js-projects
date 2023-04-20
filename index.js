// let milkPrice = 2;
// let sum;
// let breadQuantity = +prompt("Please enter bread quantity");
// let cheeseQuantity = +prompt("Please enter cheese quantity");
// let milkQuantity = +prompt("Please enter milk quantity");
// if(breadQuantity>5){breadPrice = breadPrice - (breadPrice * 0.10) };
// if(cheeseQuantity>5){cheesePrice = cheesePrice - (cheesePrice * 0.10) };
// if(milkQuantity>5){milkPrice = milkPrice - (milkPrice * 0.10) };

// function result() {
// sum = (breadPrice * breadQuantity) + (cheesePrice * cheeseQuantity)  + (milkPrice * milkQuantity);
// alert(" Bread price: " + (breadPrice * breadQuantity)+"$" + " Cheese price: " +  cheesePrice * cheeseQuantity+"$" + " Milk price " +  milkPrice * milkQuantity+"$" + "  Total price: " + sum+"$" );
// }
// result();

let suraya = {
  name: "Suraya",
  age: 21,
  amountOfOrders: [100, 20, 30, 50],
};
const mustafa = {
  name: "Mustafa",
  age: 30,
  amountOfOrders: [20, 30, 40, 50, 60],
};
const aliya = {
  name: "Aliya",
  age: 60,
  amountOfOrders: [100, 100],
};
let enterName = prompt("Please enter your name:");
function result(suraya, mustafa, aliya, enterName) {
  if (enterName == "Suraya") {
    for (let i = 0; i <= suraya.amountOfOrders.length; i++) {
      if (
        ( suraya.amountOfOrders.length >= 4 &&
          suraya.amountOfOrders[i] >= 100) ||
        suraya.age >= 60
      ) {
        return "You receive a discount";
      } else {
        
        return "You don't receive a discount";
      }
    }
  }

  if (enterName == "Mustafa") {
    for (let i = 0; i <= mustafa.amountOfOrders.length; i++) {
      if (
        (mustafa.amountOfOrders.length >= 4 &&
        mustafa.amountOfOrders[i] >= 100)||
        mustafa.age >= 60

      ) {
        return "You receive a discount";
      } else {
        
        return "You don't receive a discount";
      }
    }
  }

  if (enterName == "Aliya") {
    for (let i = 0; i <= aliya.amountOfOrders.length; i++) {
     
      if (
        ( aliya.amountOfOrders.length >= 4 &&
          aliya.amountOfOrders[i] >= 100) ||
        aliya.age >= 60
      ) {
        return "You receive a discount";
      } else {
        console.log("aliya false");
        return "You don't receive a discount";
      }
    }
  }
}

console.log(result(suraya, mustafa, aliya, enterName));
