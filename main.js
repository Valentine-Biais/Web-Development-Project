import ScrollReveal from 'scrollreveal'
import $ from 'jquery'
import axios from 'axios'


ScrollReveal().reveal('section.intro-section .animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

ScrollReveal().reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

ScrollReveal().reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});



const sendData = (user) => {
    axios.post('https://reqres.in/api/user', user)
        .then(response => {
            $("#foo")[0].reset();
            const addedUser = response.data;
            console.log(`POST: user is added`, addedUser);
            // append to DOM
            appendToDOM([addedUser]);
        })
        .catch(error => {
            console.log(error.response)
        })
};

const form = document.querySelector('form');

const formEvent = form.addEventListener('submit', event => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = ' '

    const user = {email, password};
    sendData(user);
});



