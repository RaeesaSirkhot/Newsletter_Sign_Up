const form = document.getElementById('form');
const placeholder = document.getElementById ('placeholder');

form.addEventListener ('submit', (e) => {
e.preventDefault();

checkInputs();

function checkInputs() {
  
  const placeholderValue = placeholder.value.trim();
  if (placeholderValue === ''){
    setErrorFor(placeholder, 'placeholder cannot be blank')
} else{setSuccessFor(placeholder);
  
}
};

