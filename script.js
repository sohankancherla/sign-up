const togglePassword = document.querySelector('svg');
const password = document.querySelector('#password');
const eye = document.querySelector('#eye');
const eyeSlash = document.querySelector('#eye-slash');

eye.addEventListener('click', function (e) {
    password.setAttribute('type', 'text');
    eye.style.display = 'none';
    eyeSlash.style.display = 'block';
});

eyeSlash.addEventListener('click', function (e) {
    password.setAttribute('type', 'password');
    eyeSlash.style.display = 'none';
    eye.style.display = 'block';
});