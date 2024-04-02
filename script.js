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

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    console.log(name, email, password);
    if (name === '') {
        document.querySelector('#name-validation').style.display = 'block';
        document.querySelector('input[type="text"]').style.border = '1px solid red';
        document.querySelector('#name-label').style.color = 'red';
    }
    if (email === '') {
        document.querySelector('#email-validation').style.display = 'block';
        document.querySelector('input[type="email"]').style.border = '1px solid red';
        document.querySelector('#email-label').style.color = 'red';
    }
    else if (!email.includes('@') || !email.includes('.') || email.length < 5) {
        document.querySelector('#email-validation2').style.display = 'block';
        document.querySelector('input[type="email"]').style.border = '1px solid red';
        document.querySelector('#email-label').style.color = 'red';
    }
});

document.querySelector('input[type="text"]').addEventListener('input', function(e) {
    if (this.value !== '' && this.style.border === '1px solid red') {
        document.querySelector('#name-validation').style.display = 'none';
        this.style.border = '';
        document.querySelector('#name-label').style.color = '#31AFF2';
    }
});

document.querySelector('input[type="email"]').addEventListener('input', function(e) {
    if (this.value !== '' && this.style.border === '1px solid red') {
        document.querySelector('#email-validation').style.display = 'none';
        document.querySelector('#email-validation2').style.display = 'none';
        if (this.value.includes('@') && this.value.includes('.') && this.value.length > 5) {
            this.style.border = '';
            document.querySelector('#email-label').style.color = '#31AFF2';
        }
    }
});