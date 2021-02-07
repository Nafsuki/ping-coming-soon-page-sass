const form = document.getElementById('form');
const formControl = document.getElementById('form-control');
const email = document.getElementById('email');
const small = formControl.querySelector('small');

// Show input error message
const showError = (input, message) => {
  formControl.className = 'form-control error';
  small.innerText = message;
}

// Show success outline
const showSuccess = (input) => {
  formControl.className = 'form-control success';
}

// Check email is valid 
const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Please provide a valid email address')
  } else {
    showSuccess(email);
  }
});