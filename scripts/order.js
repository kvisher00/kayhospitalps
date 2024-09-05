// Initialize the cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add selected medicines to the cart
function addToCart(category) {
    const selectElement = document.getElementById(category);
    const quantityElement = document.getElementById(`${category}-quantity`);

    const selectedMedicine = selectElement.options[selectElement.selectedIndex].text;
    const quantity = parseInt(quantityElement.value);

    if (selectedMedicine && quantity > 0) {
        const existingItem = cart.find(item => item.medicine === selectedMedicine);

        if (existingItem) {
            existingItem.quantity += quantity; // Update quantity if medicine is already in the cart
        } else {
            cart.push({ medicine: selectedMedicine, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    } else {
        alert("Please select a medicine and enter a valid quantity.");
    }

    // Reset the select and input fields
    selectElement.selectedIndex = 0;
    quantityElement.value = '';
}

// Function to update the cart display in the UI
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    cartItemsContainer.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const price = calculatePrice(item.medicine);
        const itemTotal = price * item.quantity;
        total += itemTotal;

        cartItemsContainer.innerHTML += `
            <tr>
                <td>${item.medicine}</td>
                <td>${item.quantity}</td>
                <td>$${itemTotal.toFixed(2)}</td>
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

// Function to save the cart as a favorite
function saveToFavorites() {
    localStorage.setItem('favoriteCart', JSON.stringify(cart));
    alert("Current cart saved as favorite!");
}

// Function to apply the saved favorite cart
function applyFavorites() {
    const favoriteCart = JSON.parse(localStorage.getItem('favoriteCart'));
    if (favoriteCart) {
        cart = favoriteCart;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        alert("Favorite cart applied!");
    } else {
        alert("No favorite cart found.");
    }
}

// Function to proceed to checkout
function proceedToCheckout() {
    if (cart.length > 0) {
        // You can redirect to a checkout page or show a modal
        alert("Proceeding to checkout...");
    } else {
        alert("Your cart is empty. Please add items to the cart first.");
    }
}

// Update the cart display on page load
document.addEventListener('DOMContentLoaded', updateCartDisplay);

function goToCartPage() {
    window.location.href = 'cart.html'; // Replace with your cart page URL
}

// Function to proceed to checkout
function proceedToCheckout() {
    if (cart.length > 0) {
        // Save the cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        // Redirect to the checkout page
        window.location.href = 'checkout.html';
    } else {
        alert("Your cart is empty. Please add items to the cart first.");
    }
}