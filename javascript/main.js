// đăng nhập đăng ki
const login = document.querySelector('.js-login')
const register = document.querySelector('.js-regis')
const apc = document.querySelector('#register')

function showregis(){
    apc.classList.remove('open')
}

function hideregis(){
    apc.classList.add('open')
}

register.addEventListener('click',showregis);

login.addEventListener('click', hideregis);

// const loginText = document.querySelector("#ndhl .login");
// const loginForm = document.querySelector("form.login");
// const loginBtn = document.querySelector("label.login");
// const signupBtn = document.querySelector("label.signup");
// const signupLink = document.querySelector("form .signup-link a");
// signupBtn.onclick = (() => {
//     loginForm.style.marginLeft = "-50%";
//     loginText.style.marginLeft = "-50%";
//     $('#error-message').css('display', 'none');
//     $('#success-message').css('display', 'none');
// });
// loginBtn.onclick = (() => {
//     loginForm.style.marginLeft = "0%";
//     loginText.style.marginLeft = "0%";
//     $('#error-message').css('display', 'none');
//     $('#success-message').css('display', 'none');
// });
// signupLink.onclick = (() => {
//     signupBtn.click();
//     return false;
// });