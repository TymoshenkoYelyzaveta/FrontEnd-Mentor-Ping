const form = document.getElementById('js-form');
const email = document.getElementById('js-email');

form.addEventListener('submit', e => {
    e.preventDefault();
    const value = email.value;
    if(!validateEmail(value)){
        const formControl = email.parentNode;
        formControl.classList.add('error');
        const error = formControl.querySelector('p');
        error.style.opacity = 1;
    } else {
        const formControl = email.parentNode;
        formControl.classList.remove('error');
        const error = formControl.querySelector('p');
        error.style.opacity = 0;
    }

});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}