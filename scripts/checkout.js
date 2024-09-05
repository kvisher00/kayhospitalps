// Retrieve the cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display the order summary
function displayOrderSummary() {
    const orderItemsContainer = document.getElementById('orderItems');
    const orderTotalElement = document.getElementById('orderTotal');
    orderItemsContainer.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const price = calculatePrice(item.medicine);
        const itemTotal = price * item.quantity;
        total += itemTotal;

        orderItemsContainer.innerHTML += `
            <tr>
                <td>${item.medicine}</td>
                <td>${item.quantity}</td>
                <td>$${itemTotal.toFixed(2)}</td>
            </tr>
        `;
    });

    orderTotalElement.textContent = `$${total.toFixed(2)}`;
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

// Event listener for form submission
document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const deliveryDate = document.getElementById('deliveryDate').value;
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value.trim();

    // Simple form validation
    if (fullName && email && phone && address && deliveryDate && cardNumber && expiryDate && cvv) {
        // Display confirmation message
        alert(`Thank you for your purchase, ${fullName}! Your order will be delivered on ${deliveryDate}.`);

        // Clear the cart
        localStorage.removeItem('cart');

        // Redirect to a thank you page or reset the form
        window.location.href = 'thankyou.html';
    } else {
        alert("Please fill in all required fields.");
    }
});

// Display the order summary on page load
document.addEventListener('DOMContentLoaded', displayOrderSummary);
