# Product Inventory API

A Node.js and Express API for managing a list of products in an SQLite database. The API supports adding products and calculating the total value of all products.

## Features

- **Add Products**: Add a list of products to the database, each with `name`, `price`, and `quantity` properties.
- **Calculate Total Value**: Retrieve the total value of all products, calculated as `price * quantity`.

## Prerequisites

- **Node.js** (v14 or later)
- **SQLite3**

## Getting Started

### 1. Clone the Repository

git clone https://github.com/saisrinivasthutta/products-handler

cd project-directory

## Installing dependencies

npm install

## Database setup

The project automatically initializes an SQLite database and creates a products table if it doesn’t exist.

## Starting server

node server.js or nodemon server.js

# API Endpoints

## Add Products

URL: /products

Method: POST

Headers: Content-Type: application/json

Request Body:

{
"products": [
{ "name": "Laptop", "price": 999.99, "quantity": 2 },
{ "name": "Headphones", "price": 199.99, "quantity": 5 },
{ "name": "Keyboard", "price": 49.99, "quantity": 10 },
{ "name": "Monitor", "price": 299.99, "quantity": 3 },
{ "name": "Mouse", "price": 24.99, "quantity": 8 },
{ "name": "Smartphone", "price": 699.99, "quantity": 4 },
{ "name": "Tablet", "price": 399.99, "quantity": 6 },
{ "name": "Charger", "price": 19.99, "quantity": 15 },
{ "name": "USB Cable", "price": 9.99, "quantity": 20 },
{ "name": "Portable SSD", "price": 89.99, "quantity": 7 }
]
}

## URL: /products/total-value

Method: GET

Response:

{
"totalValue": 10929.2
}
