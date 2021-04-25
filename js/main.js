"use strict"

let name = document.querySelector('#name')
let email = document.querySelector('#email')
let message = document.querySelector('#message')

let isNameValid = false
let isEmailValid = false
let isMessageValid = false

name.addEventListener('input', function (event) {
  let error = document.querySelector('#name + p')
  if (name.value.length < 3) {
    error.textContent = 'Name must containt at least 3 symbols'
    error.className = 'form-error'
    isNameValid = false
  }
  else {
    error.className = 'hidden'
    isNameValid = true
  }

}, false);

email.addEventListener('input', function (event) {
  let error = document.querySelector('#email + p')
  if (!validEmail(email.value)) {
    error.textContent = 'Incorrect email'
    error.className = 'form-error'
    isEmailValid = false
  }
  else {
    error.className = 'hidden'
    isEmailValid = true
  }
}, false);

message.addEventListener('input', function (event) {
  let error = document.querySelector('#message + p')

  if (message.value.length < 25) {
    error.textContent = 'Message must containt at least 25 symbols'
    error.className = 'form-error'
    isMessageValid = false
  }
  else {
    error.className = 'hidden'
    isMessageValid = true
  }
}, false);

function validEmail(e) {
  var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(e).search(filter) != -1;
}

function submitForm() {
  if (isMessageValid && isNameValid && isEmailValid) {
    console.log('dsd')
    document.contactForm.submit();
  }
}