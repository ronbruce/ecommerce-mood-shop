import data from './data.js'

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
    // Now we will render everything we created above to the browser! 
    itemsContainer.appendChild(newDiv)
}