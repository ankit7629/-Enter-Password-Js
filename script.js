const password = document.getElementById('input');
const result = document.getElementById('result');

const number = '0123456789';
const alphabets = 'abcdefghijklmnopqrstuvwxyz';
const special = '!@#$%^&*()_+';
const Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

password.addEventListener('input', () => {
    const pass = password.value;
    if (pass === '') {
        result.innerHTML = '';
    } else if (pass.length < 8) {
        result.innerHTML = 'Password must be at least 8 character';
        result.style.color = 'red';

    // } else if (pass.length > 8) {
    //     if (pass.includes(number) && pass.includes(alphabets) && pass.includes(special) && pass.includes(Upper)) {
    //         result.innerHTML = 'Password is strong';
    //     } else if (pass.includes(number) && pass.includes(alphabets) && (special)) {
    //         result.innerHTML = 'medium password';
    //     } 
    } else if (pass.length > 15) {
        result.innerHTML = 'Password must be less then 16 character';
    }

    else {
        result.innerHTML = '';
    }


})
