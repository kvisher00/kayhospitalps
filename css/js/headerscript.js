document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    mobileMenuButton.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });

    // Dropdown menu for small screens
    const servicesLink = document.querySelector('.dropdown > a');
    
    servicesLink.addEventListener('click', function (event) {
        event.preventDefault();
        if (window.innerWidth <= 768) {
            dropdownMenu.classList.toggle('show');
        }
        event.stopPropagation();
    });

    document.addEventListener('click', function () {
        dropdownMenu.classList.remove('show');
    });

    document.addEventListener('DOMContentLoaded', function () {
        const mobileMenuButton = document.getElementById('mobile-menu');
        const navbar = document.getElementById('navbar'); // Changed to use the id
    
        mobileMenuButton.addEventListener('click', function () {
            navbar.classList.toggle('show');
        });
    });
    

    // Prevent closing dropdown when clicking inside it
    dropdownMenu.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
