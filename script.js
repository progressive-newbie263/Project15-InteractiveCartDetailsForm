//card num
const cardNumber = document.getElementById("number");
const numberInp = document.getElementById("card-number");
//name
const nameInp = document.getElementById("card-name");
const cardName = document.getElementById("name");
//month
const cardMonth = document.getElementById("month");
const monthInp = document.getElementById("card-month");
//year
const cardYear = document.getElementById("year");
const yearInp = document.getElementById("card-year");
//card cvc
const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card-cvc");

//form:
const submitButton = document.getElementById("submit-button");
const successForm = document.querySelector(".thank");
const form = document.querySelector("form");

function setCardNumber(event) {
  cardNumber.innerText = format(event.target.value);
}
function setCardName(event) {
  cardName.innerText = format(event.target.value);
}
function setCardMonth(event) {
  cardMonth.innerText = format(event.target.value);
}
function setCardYear(event) {
  cardYear.innerText = format(event.target.value);
}
function setCardCvc(event) {
  cardCvc.innerText = format(event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  if (!nameInp.value) {
    nameInp.classList.add('error');
    nameInp.parentElement.classList.add("error-message")
  } else {
    nameInp.classList.remove("error");
    nameInp.parentElement.classList.remove("error-message");
  }
  if (!numberInp.value) {
    numberInp.classList.add('error')
    numberInp.parentElement.classList.add("error-message");
  } else if (numberInp.value.length < 16) {
      numberInp.classList.add("error")
  } else {
    numberInp.classList.remove("error");
    numberInp.parentElement.classList.remove("error-message");
  }
  if (!monthInp.value) {
    monthInp.classList.add("error")
    monthInp.parentElement.classList.add("error-message");
  } else {
    monthInp.classList.remove("error");
    monthInp.parentElement.classList.remove("error-message");
  }
  if (!yearInp.value) {
    yearInp.classList.add("error")
    yearInp.parentElement.classList.add("error-message");
  } else {
    yearInp.classList.remove("error");
    yearInp.parentElement.classList.remove("error-message");
  }
  if (!cvcInp.value) {
    cvcInp.classList.add("error")
    cvcInp.parentElement.classList.add("error-message");
  } else {
    cvcInp.classList.remove("error");
    cvcInp.parentElement.classList.remove("error-message");
  }

  //successfully changes to thank you message once correctly completing the form 
  if (nameInp.value && numberInp.value && monthInp.value && yearInp.value && cvcInp.value && numberInp.value.length == 16) {
    successForm.classList.remove("hidden");
    form.classList.add("hidden");
  }
}

// have absolute no idea how to do this xD. Copy pasted go brr
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

//interactive inputs
numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitButton.addEventListener("click", handleSubmit);


//continue button
const continueButton = document.getElementById('continue-button');
continueButton.addEventListener('click', () => {
  cardNumber.innerText = '0000 0000 0000 0000';
  cardName.innerText = 'Jane Appleseed';
  cardMonth.innerText = '00';
  cardYear.innerText = '00';
  cardCvc.innerText = '000';

  numberInp.value = '';
  nameInp.value = '';
  monthInp.value = '';
  yearInp.value = '';
  cvcInp.value = '';

  successForm.classList.add("hidden");
  form.classList.remove("hidden");
});


