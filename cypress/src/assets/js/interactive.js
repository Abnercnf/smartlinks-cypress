const btnLogin = document.querySelector('#btn_login')
const errors = document.querySelector('#erros')
const container = document.querySelector('.container')

function validation() {
    const email = document.querySelector('#email').value
    const pass = document.querySelector('#password').value
    
    if (email == "" ) {
        const alert = document.createElement('span')
        const alertMsg = document.createTextNode("Fill in the required fields")
        alert.classList.add('msg', 'msg-alert')
        alert.setAttribute('id', 'alert')
        alert.appendChild(alertMsg)
        container.appendChild(alert)
    }
    else if ((email != "admin@test.com") || (pass != "123456")) {
        const alert = document.createElement('span')
        const alertMsg = document.createTextNode("Incorrect credentials. Try again.")
        alert.classList.add('msg', 'msg-error')
        alert.setAttribute('id', 'error')
        alert.appendChild(alertMsg)
        container.appendChild(alert)
    }
    else{
        const alert = document.createElement('span')
        const alertMsg = document.createTextNode("Login Successful!")
        alert.classList.add('msg', 'msg-success')
        alert.setAttribute('id', 'success')
        alert.appendChild(alertMsg)
        container.appendChild(alert)
    }

    setTimeout(() => {
        const alert = document.querySelector('.msg');
        alert.style.opacity = 0;
        alert.addEventListener('transitionend', () => alert.remove());
    }, 5000);
}

// function validationClose(){
//     const alert = document.querySelector('span');
//     alert.remove();
// }

// setTimeout(validationClose, 3000);