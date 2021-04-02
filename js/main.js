"use strict"

let name = document.querySelector('#name')
let email = document.querySelector('#email')
let message = document.querySelector('#message')
//console.log(email.value)

name.addEventListener('input', function (event) {
  let error = document.querySelector('#name + p')
  if (name.value.length < 3) {
    error.textContent = 'Name must containt at least 3 symbols'
    error.className = 'form-error'
  }
  else {
    error.className = 'hidden'
  }

}, false);


email.addEventListener('input', function (event) {
  let error = document.querySelector('#email + p')
  if (!validEmail(email.value)) {
    error.textContent = 'Incorrect email'
    error.className = 'form-error'
  }
  else {
    error.className = 'hidden'
  }
}, false);

message.addEventListener('input', function (event) {
  let error = document.querySelector('#message + p')

  if (email.value.length < 25) {
    error.textContent = 'Name must containt at least 25 symbols'
    error.className = 'form-error'
  }
  else {
    error.className = 'hidden'
  }
}, false);

function validEmail(e) {
  var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(e).search(filter) != -1;
}