var mysql = require("mysql");
var Table = require('cli-table');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
//   connection.end();
});

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      
      //console.log(res);
      
      var Table = require('cli-table');
 
// instantiate
var table = new Table({
    head: ['item_id', 'product_name', 'department_name', 'price', 'stock_quantity']
  , colWidths: [10, 35, 35, 10, 20]
});
 for (var i =0;i<res.length;i++){

 
// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
    [res[i].item_id, res[i].product_name,res[i].department_name,res[i].price,res[i].stock_quantity]
  
);
}
console.log(table.toString());
prompt();
    });
  }

var quantityRequired;
var itemRequired;
var quantityAvailable;
var unit_price;
var requiredProductName;
var updatedQuantity;


  function prompt(){
  inquirer.prompt([
    {
     type:"number",
      name: "item_id",
      message: "What is the ID of the item you would like to purchase?"
    },
    {
        type:"number",
         name: "stock_quantity",
         message: "How many would you like?"
       }
  ]).then(function(answers) {
    console.log("You want to buy "+answers.stock_quantity+" of " + answers.item_id);   
 quantityRequired = answers.stock_quantity;
 itemRequired = answers.item_id;
 confirmOrder();
 

});
}

function confirmOrder(){
connection.query("SELECT * FROM products WHERE ?", 
[{
    item_id:itemRequired
}],

function(err,res) {
   if(err) throw err;
    // Log all results of the SELECT statement
    
     quantityAvailable = res[0].stock_quantity;
     unit_price = res[0].price;
     requiredProductName = res[0].product_name;
    console.log("Available quantity "+ res[0].stock_quantity);
    if (quantityRequired < quantityAvailable){
         updatedQuantity = quantityAvailable - quantityRequired;
        placeOrder();
    }else{
        console.log("Required quantity not available.Please Check back later");
    }
});
}




function placeOrder() {

        connection.query("UPDATE products SET ? WHERE ?",
        [
            {
            stock_quantity:updatedQuantity
            },
            {
                item_id:itemRequired
            }
    ],
    function(err,res){
        var totalPrice = quantityRequired * unit_price;
        console.log("Your Total for "+quantityRequired+" units of "+ requiredProductName+" is $"+totalPrice);
        console.log("Order Confirmed")
        readProducts();
    });
        
    
    //console.log(res);
}

    
    // connection.end();
    

// instantiate


  
  


