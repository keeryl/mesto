// validation of forms


function hideErrorMessage (inputElement, obj) {
  const inputErrorMessage = inputElement.nextElementSibling;
  inputElement.classList.remove(obj.inputErrorClass);
  inputErrorMessage.classList.remove(obj.errorMessageClass);
  inputErrorMessage.textContent = '';
}

function showErrorMessage (inputElement, obj) {
  const inputErrorMessage = inputElement.nextElementSibling;
  inputElement.classList.add(obj.inputErrorClass);
  inputErrorMessage.classList.add(obj.errorMessageClass);
  inputErrorMessage.textContent = inputElement.validationMessage;
}

function toggleButtonState (buttonElement, inputs, obj) {
  if (!allInputsValid(inputs)) {
    buttonElement.classList.remove(obj.inactiveButtonClass);
    buttonElement.disabled = false;
  } else {
    buttonElement.classList.add(obj.inactiveButtonClass);
    buttonElement.disabled = true;
  }
}

function allInputsValid (inputs) {
  return inputs.some(input => !input.validity.valid);
}

function checkInputValidation (inputElement, obj) {
  if (inputElement.validity.valid) {
    hideErrorMessage(inputElement, obj);
  } else {
    showErrorMessage(inputElement, obj);
  }
}

function setEventListeners (formElement, obj) {

  const inputs = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);
  const closeBtn = formElement.querySelector(obj.closeBtnSelector);
  const popupElement = formElement.closest(obj.popupSelector);

  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });

  inputs.forEach(inputElement => {
    inputElement.addEventListener('input', function () {
      checkInputValidation(inputElement, obj);
      toggleButtonState(buttonElement, inputs, obj);
    });
  });

  toggleButtonState(buttonElement, inputs, obj);
}



function enableValidation (obj) {
  const forms = Array.from(document.querySelectorAll(obj.formSelector));
  forms.forEach(formElement => {
    setEventListeners(formElement, obj);
  });
}


