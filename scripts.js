import data from './data.js'

const itemList = document.getElementById('item-list')
itemList.innerHTML = '<li> Hello World</li>'
const cartQty = document.getElementById('cart-qty')
cartQty.innerHTML = 'Hey'
const cartTotal = document.getElementById('cart-total') 
cartTotal.innerHTML = 'No'

const itemsContainer = document.querySelector('#items');

for (let i = 0; i < data.length; i += 1) {
    // As I loop through the data, I am creating a div element and giving it a class name items.
    const newDiv = document.createElement('div');
    newDiv.className = 'item'
    // Same thing happening here, except I am iterating over images in my data and actually assigning it some attributes. 
    const img = document.createElement('img');
    img.src = data[i].image
    img.width = 300
    img.height = 300
    newDiv.appendChild(img)
    // Do you see the pattern? Create element from JS, iterate over data, and finally attached it to the DOM.
    // Doesn't do anything yet though, we still need to render it to the browser so we will be able to see our images.
    const desc = document.createElement('p');
    desc.innerText = data[i].desc
    newDiv.appendChild(desc)

    const price = document.createElement('p')
    price.innerText = data[i].price
    newDiv.appendChild(price)

    const button = document.createElement('button')
    button.id = data[i].name
    button.dataset.price = data[i].price
    button.innerHTML = 'Add to Cart'
    newDiv.appendChild(button)
    
    // Add event listener to the button 
    button.addEventListener('click', () => {
        addItem(button.getAttribute('id'), button.getAttribute('date-price'))
        showItems()
    
    })
    
    itemsContainer.appendChild(newDiv)
}

// Shopping cart

console.log(itemList)
// This is my shopping cart for adding items.
const cart = []
// I created a function to help me add items to my cart
function addItem(name, price) {
   // Upadate my cart each time I add a duplicate item. 
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[i].qty += 1
            return
        }
    }
     // This item object will allow my addItem function to be more flexible. I can invoke any type of new item or price and add to my cart.
    const item = {name, price, qty:1}
    // I'll use this push() to add items to my cart
    cart.push(item)
}
// Show items helps me display items in my shopping cart so I can view them when added.
function showItems() {
    const qty = getQty()
    cartQty.innerHTML = `You have ${qty} items in your cart.`
    // This is a different way to get my items by looping over them. 
    let itemStr = ''
    for (let i = 0; i < cart.length; i++) {
        // console.log(`-${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
        // const name = cart[i].name
        // const price = cart[i].price
        // const qty = cart[i].qty
        const { name, price, qty } = cart[i]
        
        itemStr += `<li>${name} $${price} x ${qty} = ${qty * price}</li>`
        }
        itemList.innerHTML = itemStr
    
        const totalPrice = getTotal()
        cartTotal.innerHTML = `The total price is $${totalPrice}`
    }
// Gets my total
function getTotal() {
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2)

}
// Get my quantity 
function getQty() {
    let qty = 0
    for (let i = 0; i < cart.length; i++) {
        qty += cart[i].qty
      
        }
    return qty
}

function removeItem(name, qty = 0) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            if (qty > 0) {
                cart[i].qty -= 1
            }
            if (cart[i].qty < 1 || qty === 0) {
            cart.splice(i, 1)
            }
           return

        }

    }
  
}


// addItem('Apple', 0.99)
// addItem('Orange', 1.29)
// addItem('Yugioh cards', 4.29)
// addItem('Yugioh cards', 4.29)
// addItem('Taffi', 6.99)
// addItem('Taffi', 6.99)
// addItem('FF16', 60.99)
addItem()
removeItem()
getTotal()
getQty()
showItems()


// {/* <button class="remove" data-name"${name}">Remove</button>
// <button class="add-one" data-name"${name}"> + </button>
// <button class="remove-one" data-name"${name}"> - </button>
// <input class="update" type="number" data-name="${name}">
// </li> */}