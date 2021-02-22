console.log("Attached");                                            //console.log(name,email,phone,validation);
let name = document.getElementById('name');
let email = document.getElementById('email');
let validation = document.getElementById('validation');
let phone = document.getElementById('phone');
let country = document.getElementById('country');
let validName = false;
let validEmail = false;
let validPnone = false;
let validDiation = false;
let validCountry = false;


name.addEventListener('blur', () => {                               //Validate name here 
    console.log("name is blured");
    let regex = /^[A-Z]([a-z A-Z]){4,10}$/;
    let str = name.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log('Your name is valid');
        name.classList.remove('is-invalid')
        validName = true;
    }
    else {
        console.log('Your name is not valid');
        name.classList.add('is-invalid')
        validName = false;
    }
})



email.addEventListener('blur', () => {                         //Validate email here 
    console.log("email is blured");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,5}$/;
    let str = email.value;
    console.log(regex, str);
    name.classList.remove('is-invalid')
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid')
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid')
        validEmail = false;
    }
})



phone.addEventListener('blur', () => {                           //Validate phone here 
    console.log("phone is blured");
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid')
        validPnone = true;
    }
    else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid')
        validPnone = false;
    }
})



validation.addEventListener('blur', () => {                   //Validate validation here
    console.log("validation is blured");
    let regex = /^([a-z A-Z 0-9]){13}$/;
    let str = validation.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your validation is valid');
        validation.classList.remove('is-invalid');
        validDiation = true;
    }
    else {
        console.log('Your validation is not valid');
        validation.classList.add('is-invalid');
        validDiation = false;
    }
})




country.addEventListener('blur', () => {                          //Validate COUNTRY here
    console.log("country is blured");
    let regex = /^[A-Z]{4,10}$/;
    let str = country.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Valid Country');
        country.classList.remove('is-invalid');
        validCountry = true;
    }
    else {
        console.log('Your country is not valid');
        country.classList.add('is-invalid');
        validCountry = false;

    }
})



let submit = document.getElementById('submit');                 //Submit Button
submit.addEventListener('click', () => {
    console.log("Submit");
    console.log(validPnone, validName, validEmail, validDiation);
    if (validDiation && validEmail && validName && validPnone) {

        console.log('phone,email;name,validditation .Submit the form');
        let sucess = document.getElementById('sucess')
        sucess.classList.add('show');
        failure.classList.remove('show');
        alert('Sucessfully Done .')
    }
    else {
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        sucess.classList.remove('show');
        alert('Reenter the Deatils');
    }
})
