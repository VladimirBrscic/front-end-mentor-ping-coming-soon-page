const form = document.querySelector('form');
const emailInput = document.querySelector('input');
const errorMessage = document.querySelector('.error-message');

form.addEventListener( 'submit', (e) => {
  e.preventDefault();
  const regExTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!regExTest.test(emailInput.value.trim()) || emailInput.value.trim() === ''){
    emailInput.value = '';
    emailInput.placeholder = 'email@example/com';
    form.className = 'email-error';
  }else{
    form.className = 'email-success';
  }
})
