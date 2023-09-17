document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.getElementById('addToCartButton');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const productDetails = document.getElementById('productDetails');
    const creditCardInput = document.getElementById('creditCard');
    const payButton = document.getElementById('payButton');

    let cart = [];
    let selectedProduct = null;
    
    addToCartButton.addEventListener('click', addToCart);

    // Sample product data
    const sampleProduct = {
        name: 'Product Name',
        price: 10.00,
        description: 'Product description goes here',
        imageUrl: 'sample-product-image.jpg', // Replace with the actual image URL
    };

    function addToCart() {
        selectedProduct = sampleProduct;
        cart.push(selectedProduct);

        // Update the cart items, total, and product details
        renderCart();
    }

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        productDetails.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price;

            // Display product details
            const productDetail = document.createElement('div');
            productDetail.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            `;
            productDetails.appendChild(productDetail);
        });

        cartTotal.textContent = total.toFixed(2);
    }

    payButton.addEventListener('click', processPayment);

    function processPayment() {
        const creditCardNumber = creditCardInput.value;
        if (isValidCreditCard(creditCardNumber)) {
            // Payment successful, you can add further processing logic here
            alert('Payment successful!');
            cart = [];
            renderCart(); // Clear the cart after successful payment
        } else {
            alert('Invalid credit card number. Please try again.');
        }
    }

    // A simple credit card validation function (for demonstration purposes)
    function isValidCreditCard(number) {
        // Replace with actual credit card validation logic
        return /^\d{16}$/.test(number); // Assumes a 16-digit credit card number
    }
});