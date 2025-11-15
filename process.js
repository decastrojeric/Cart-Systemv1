const main = document.querySelector('#main');
const h2 = main.firstElementChild;
const section = h2.nextElementSibling;
const div = section.firstElementChild;
const products = div.children;



console.log(products);

const productArray = Array.from(products);
console.log(productArray);

productArray.forEach((p) => {
    p.addEventListener('click', () => {
        console.log('click')
    })
})

const cartItem = document.createElement('p');
        cartItem.innerText = p.firstElementChild.innerText + " - " + p.querySelector("p").innerText; // name + price

        // Append to cart container
        cartItemsContainer.appendChild(cartItem);
    });
});

