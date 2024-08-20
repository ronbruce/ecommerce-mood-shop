Ecommerce Mood App Documentation 

Overview:
The E-commerce Mood App is a web application that allows users to browse and purchase products. It features a dynamic product display, shopping cart functionality, and basic calculations for item quantity and total price.

Modules:
Product Display: Handles the rendering of products from the provided data.

Shopping Cart: Manages cart items, quantities, and total calculations.

Functions:
addItem(name, price): Adds a product to the shopping cart.

showItems(): Updates the display of items in the shopping cart.

getTotal(): Calculates the total price of items in the cart.

getQty(): Calculates the total quantity of items in the cart.

removeItem(name, qty): Removes or reduces the quantity of a product in the cart.

Data Structures:
data: An array of objects representing products, each with properties for image, desc, price, and name.

cart: An array of objects representing cart items, each with properties for name, price, and qty.

Usage: The app's core functionality is driven by user interactions with product display elements. Clicking the "Add to Cart" button triggers the addItem function, updating the cart and displaying changes.

Known Issues:
Currently, the app lacks features for removing individual items from the cart.
Error handling for invalid user inputs is not implemented.