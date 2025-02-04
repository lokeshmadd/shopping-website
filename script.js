let cartCount = 0;

function addToCart(price) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}
