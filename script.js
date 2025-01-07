document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('validationForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const togglePassword = document.getElementById('togglePassword');
    const submitButton = document.getElementById('submitButton');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');


    const touchedFields = {
        fullName: false,
        email: false,
        phone: false,
        password: false,
        confirmPassword: false,
    };

    const validateForm = () => {
        let isValid = true;

        // Validate full name
        if (touchedFields.fullName && fullName.value.trim().length < 5) {
            nameError.textContent = "Name must be at least 5 characters.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Validate email
        if (touchedFields.email && !email.value.trim().includes('@')) {
            emailError.textContent = "Enter a valid email address using @.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Validate phone number
        if (
            touchedFields.phone &&
            (phone.value.trim() === '123456789' || phone.value.trim().length !== 10 || isNaN(phone.value))
        ) {
            phoneError.textContent = "Enter a valid 10-digit phone number.";
            isValid = false;
        } else {
            phoneError.textContent = "";
        }

        // Validate password
        if (
            touchedFields.password &&
            (password.value.trim().toLowerCase() === 'password' ||
                password.value.trim().toLowerCase() === fullName.value.trim().toLowerCase() ||
                password.value.trim().length < 8)
        ) {
            passwordError.textContent = "Password is too weak.";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        // Validate confirm password
        if (touchedFields.confirmPassword && confirmPassword.value.trim() !== password.value.trim()) {
            confirmPasswordError.textContent = "Passwords do not match.";
            isValid = false;
        } else {
            confirmPasswordError.textContent = "";
        }

        // Enable/disable submit button based on validation
        submitButton.disabled = !isValid; // Disable button if invalid
        submitButton.classList.toggle('active', isValid); // Toggle 'active' class when valid
    };

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        togglePassword.textContent = type === 'password' ? '👁️' : '🙄';
    });
    // Prevent form submission if invalid
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!submitButton.disabled) {
            alert('Form submitted successfully!');
        }
    });

    // Initial validation check (only affects the submit button)
    validateForm();
});

