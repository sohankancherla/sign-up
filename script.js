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
    let verify = true;

    console.log(name, email, password);
    if (name === '') {
        document.querySelector('#name-validation').style.display = 'block';
        document.querySelector('input[type="text"]').style.border = '1px solid red';
        document.querySelector('#name-label').style.color = 'red';
        verify = false;
    }
    if (email === '') {
        document.querySelector('#email-validation').style.display = 'block';
        document.querySelector('input[type="email"]').style.border = '1px solid red';
        document.querySelector('#email-label').style.color = 'red';
        verify = false;
    }
    else if (!email.includes('@') || !email.includes('.') || email.length < 5) {
        document.querySelector('#email-validation2').style.display = 'block';
        document.querySelector('input[type="email"]').style.border = '1px solid red';
        document.querySelector('#email-label').style.color = 'red';
        verify = false;
    }
    if (password === '') {
        document.querySelector('#password-validation').style.display = 'block';
        document.querySelector('input[type="password"]').style.border = '1px solid red';
        document.querySelector('#password-label').style.color = 'red';
        verify = false;
    }
    else if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        document.querySelector('#password-validation2').style.display = 'block';
        document.querySelector('input[type="password"]').style.border = '1px solid red';
        document.querySelector('#password-label').style.color = 'red';
        verify = false;
    }
    if (verify) {
        window.location.href = 'success.html';
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

document.querySelector('input[type="password"]').addEventListener('input', function(e) {
    if (this.value !== '' && this.style.border === '1px solid red') {
        document.querySelector('#password-validation').style.display = 'none';
        document.querySelector('#password-validation2').style.display = 'none';
        this.style.border = '';
        document.querySelector('#password-label').style.color = '#31AFF2';
    }
    if (this.value !== '') {
        document.querySelector('.password-check').style.display = 'block';
        document.querySelector('#other').style.display = 'none';
    } else {
        document.querySelector('.password-check').style.display = 'none';
        document.querySelector('#other').style.display = 'block';
    }
    if (this.value.length >= 8) {
        document.querySelector('#p-1').style.color = '#10b981';
        document.querySelector('#check-1').style.stroke = '#10b981';
        document.querySelector('#check-1').style.fill = '#10b981';
    } else {
        document.querySelector('#p-1').style.color = '#B3B3B3';
        document.querySelector('#check-1').style.stroke = '#B3B3B3';
        document.querySelector('#check-1').style.fill = '#B3B3B3';
    }
    if (/[a-z]/.test(this.value)) {
        document.querySelector('#p-2').style.color = '#10b981';
        document.querySelector('#check-2').style.stroke = '#10b981';
        document.querySelector('#check-2').style.fill = '#10b981';
    } else {
        document.querySelector('#p-2').style.color = '#B3B3B3';
        document.querySelector('#check-2').style.stroke = '#B3B3B3';
        document.querySelector('#check-2').style.fill = '#B3B3B3';
    }
    if (/[A-Z]/.test(this.value)) {
        document.querySelector('#p-3').style.color = '#10b981';
        document.querySelector('#check-3').style.stroke = '#10b981';
        document.querySelector('#check-3').style.fill = '#10b981';
    } else {
        document.querySelector('#p-3').style.color = '#B3B3B3';
        document.querySelector('#check-3').style.stroke = '#B3B3B3';
        document.querySelector('#check-3').style.fill = '#B3B3B3';
    }
    if (/[0-9]/.test(this.value)) {
        document.querySelector('#p-4').style.color = '#10b981';
        document.querySelector('#check-4').style.stroke = '#10b981';
        document.querySelector('#check-4').style.fill = '#10b981';
    } else {
        document.querySelector('#p-4').style.color = '#B3B3B3';
        document.querySelector('#check-4').style.stroke = '#B3B3B3';
        document.querySelector('#check-4').style.fill = '#B3B3B3';
    }
    if (/[!@#$%^&*(),.?":{}|<>]/.test(this.value)) {
        document.querySelector('#p-5').style.color = '#10b981';
        document.querySelector('#check-5').style.stroke = '#10b981';
        document.querySelector('#check-5').style.fill = '#10b981';
    } else {
        document.querySelector('#p-5').style.color = '#B3B3B3';
        document.querySelector('#check-5').style.stroke = '#B3B3B3';
        document.querySelector('#check-5').style.fill = '#B3B3B3';
    }
});