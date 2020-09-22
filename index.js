const formValidate = document.getElementById('my-form');
const firstNameValidate = document.getElementById('first-name');
const middleNameValidate = document.getElementById('middle-name');
const lastNameValidate = document.getElementById('last-name');
const errorValidate = document.getElementById('error');
const nbrValidate = document.getElementById('phone-nbr');
const emailValidate = document.getElementById('email');

formValidate.addEventListener('submit', function(e){
    let messages = [];

    if(!/^[a-zA-Z]*$/g.test(firstNameValidate.value)){
        messages.push('First Name must only be letters!');
    }
    if(!/^[a-zA-Z]*$/g.test(middleNameValidate.value)){
        messages.push('Middle Name must only be letters!');
    }
    if(!/^[a-zA-Z]*$/g.test(lastNameValidate.value)){
        messages.push('Last Name must only be letters!');
    }
    if(!/^[0-9]+$/g.test(nbrValidate.value)){
        messages.push('Phone Number must only be numbers!');
    }
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(emailValidate.value)){
        messages.push('Enter a valid email!');
    }
    if(messages.length > 0){
        e.preventDefault()
        errorValidate.innerText = messages.join(', ')
    }
})





