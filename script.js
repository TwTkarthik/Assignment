let cart = [];
let total = 0;

function addToCart(cakeName, price) {
    cart.push({ name: cakeName, price: price });
    total += price;
    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById('cart-items');
    let cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total;
}
