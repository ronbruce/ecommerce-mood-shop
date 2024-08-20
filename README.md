# Ecommerce Mood App Documentation

## Overview
The E-commerce Mood App is a web application designed to allow users to browse and purchase products. Key features include:
- Dynamic product display
- Shopping cart functionality
- Basic calculations for item quantity and total price

## Modules

### Product Display
Responsible for rendering products based on the provided data.

### Shopping Cart
Handles cart items, including their quantities and total price calculations.

## Functions

- **addItem(name, price)**: Adds a product to the shopping cart.
- **showItems()**: Updates the display to reflect the current items in the shopping cart.
- **getTotal()**: Calculates and returns the total price of items in the cart.
- **getQty()**: Calculates and returns the total quantity of items in the cart.
- **removeItem(name, qty)**: Removes or reduces the quantity of a specific product in the cart.

## Data Structures

- **data**: An array of product objects. Each object contains:
  - `image`: URL or path to the product image
  - `desc`: Description of the product
  - `price`: Price of the product
  - `name`: Name of the product

- **cart**: An array of cart item objects. Each object contains:
  - `name`: Name of the product
  - `price`: Price of the product
  - `qty`: Quantity of the product in the cart

## Usage
User interactions with the product display elements drive the app’s core functionality. Clicking the "Add to Cart" button triggers the `addItem` function, which updates the cart and refreshes the display to show the current items.

## Known Issues
- The app currently lacks functionality for removing individual items from the cart.
- Error handling for invalid user inputs is not implemented.
