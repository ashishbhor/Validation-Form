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
