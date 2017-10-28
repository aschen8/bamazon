//creating a new object named "newOrder"
//with variables customerName, productName, and quantity
var newOrder = {
  customerName: null,
  productName: null,
  quantity: null,
}

//calling inquirer.prompt to ask user name
inquirer.prompt("What's your name?").then(function(answer) {
  newOrder.customerName = answer;
})

//assume user enters "Barry" then:
/*
newOrder = {
  customerName: "Barry",
  productName: "Baseball",
  quantity: null,
}
*/

//calling inquirer.prompt to present user list of items to purchase
inquirer.prompt("Which product would you like to purchase: Baseball, Bat, Glove?").then(function(answer) {
  // validate their answer, make sure it is viable response
  if (answer == "Baseball" || answer == "Bat" || answer == "Glove") {
    newOrder.productName = answer;
  //if not viable, console.log try again
  } else {
    console.log("not a viable answer, try again")
  }
})

//assume user enters "Baseball" then:
/*
newOrder = {
  customerName: "Barry",
  productName: "Baseball",
  quantity: null,
}
*/

inquirer.prompt("How many would you like to buy?").then(function(answer) {
  if (answer >= 0) {
    newOrder.quantity = answer;
  }
})

//assume user enters "1" then:
/*
newOrder = {
  customerName: "Jake",
  productName: "Baseball",
  quantity: 1,
}
*/


// "INSERT INTO tbl_name (a,b,c) VALUES('Jake', 'Baseball', 1)"

var sql = "INSERT INTO orders (customerName, productName, quantity) VALUES(" + newOrder.customerName + ", " newOrder.productName + ", " + newOrder.quantity + ")"


















