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

// $document.$ready(function(){
//     $("Button").click(function(){
//         $("#main'").toggle();
//     });
// });
// $document.$ready(function(){
//     $("Button").click(function(){
//         $("#register'").toggle();
//     });
// });


// welcome
// const loginwel = document.querySelector('.js-login-wel')
// const wel = document.querySelector('.js-out')
// const home = document.querySelector('#wel')

// function showwel(){
//     home.classList.remove('mal')
// }
// function hidewel(){
//     home.classList.add('mal')
// }

// loginwel.addEventListener('click',showwel);
// wel.addEventListener('click',hidewel);