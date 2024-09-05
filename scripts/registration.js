document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Retrieve form values
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip').value,
        insuranceProvider: document.getElementById('insuranceProvider').value,
        policyNumber: document.getElementById('policyNumber').value
    };

    // Save to local storage
    localStorage.setItem('patientRegistrationData', JSON.stringify(formData));

    // Alert user that data is saved
    alert('You have been successfully registered!');

    // Clear form after saving
    document.getElementById('registrationForm').reset();
});
