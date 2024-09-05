document.querySelector('.reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;

    // Create an object to store the data
    const reservationData = {
        name: name,
        email: email,
        phone: phone,
        doctor: doctor,
        date: date,
        time: time,
        message: message
    };

    // Save the data to local storage
    localStorage.setItem('reservationData', JSON.stringify(reservationData));

    // Optionally, show a confirmation message
    alert('Your appointment has been saved successfully!');

    // Clear the form (if needed)
    document.querySelector('.reservation-form').reset();
});