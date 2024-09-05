// Retrieve the cart from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    cartItemsContainer.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {
        const price = calculatePrice(item.medicine);
        const itemTotal = price * item.quantity;
        total += itemTotal;

        cartItemsContainer.innerHTML += `
            <tr>
                <td>${item.medicine}</td>
                <td>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                </td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button class="remove-button" onclick="removeFromCart(${index})">Remove</button></td>
            </tr>
        `;
    });

    cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

// Function to calculate the price of each medicine
function calculatePrice(medicine) {
    const prices = {
        'Aspirin': 5.00,
        'Ibuprofen': 4.50,
        'Paracetamol': 3.50,
        'Naproxen': 6.00,
        'Acetaminophen': 3.75,
        'Ketoprofen': 7.00,
        'Amoxicillin': 8.00,
        'Ciprofloxacin': 9.00,
        'Doxycycline': 10.00,
        'Azithromycin': 11.00,
        'Cephalexin': 8.50,
        'Clindamycin': 12.00,
        'Sertraline': 15.00,
        'Fluoxetine': 14.00,
        'Venlafaxine': 16.00,
        'Duloxetine': 17.00,
        'Escitalopram': 15.50,
        'Paroxetine': 16.50,
        'Loratadine': 6.50,
        'Cetirizine': 6.00,
        'Diphenhydramine': 5.50,
        'Fexofenadine': 7.50,
        'Lisinopril': 8.00,
        'Atenolol': 7.75,
        'Losartan': 9.25,
        'Amlodipine': 10.50,
        'Metoprolol': 11.00,
        'Hydrochlorothiazide': 8.75
    };

    return prices[medicine] || 0;
}

// Function to update the quantity of a specific item
function updateQuantity(index, newQuantity) {
    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Function to proceed to checkout
function proceedToCheckout() {
    if (cart.length > 0) {
        alert("Proceeding to checkout...");
        // You can redirect to a checkout page or show a modal
    } else {
        alert("Your cart is empty. Please add items to the cart first.");
    }
}

// Update the cart display on page load
document.addEventListener('DOMContentLoaded', updateCartDisplay);
