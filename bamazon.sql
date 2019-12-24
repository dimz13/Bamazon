CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) ,
  department_name  VARCHAR(45) ,
  price INT(10),
  stock_quantity INT(10) ,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name,price,stock_quantity) values ('Uncharted 4', 'Video Games',49.95,150);
INSERT INTO products (product_name, department_name,price,stock_quantity) values ('Doom', 'Video Games',59.95,150);
INSERT INTO products (product_name, department_name,price,stock_quantity) values ('Crate of Spam', 'Food and Drinks', 24.50,50);
INSERT INTO products (product_name, department_name,price,stock_quantity) values ('Cool Shades', 'Apparel', 75,5);
INSERT INTO products (product_name, department_name,price,stock_quantity) values ('Worn Denim Jeans', 'Apparel',54.25,35);
INSERT INTO products (product_name, department_name,price,stock_quantity) values ('Survival Towel', 'Necessities',42.42,42);
INSERT INTO products (product_name, department_name,price,stock_quantity) values ('Bill and Teds Excellent Adventure', 'Films',15,25);
INSERT INTO products (product_name, department_name,price,stock_quantity) values ('Mad Max:Fury Road', 'Films',25.50,57);
INSERT INTO products (product_name, department_name,price,stock_quantity) values ('Monopoly', 'Board Games',30.50,35);
INSERT INTO products (product_name, department_name,price,stock_quantity) values ('Yatzee', 'Board Games',19.95,23);
