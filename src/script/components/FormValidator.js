
class FormValidator {

  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputs = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    this._closeBtn = this._formElement.querySelector(this._config.closeBtnSelector);
    this._popupElement = this._formElement.closest(this._config.popupSelector);
  }

  _setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._toggleButtonState();
    });
    this._inputs.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidation(inputElement);
        this._toggleButtonState();
      });
    });
    this._toggleButtonState();
  }

  resetForm() {
    this._formElement.reset();
    this._inputs.forEach(inputElement => {
      this._hideErrorMessage(inputElement);
    });
    this._toggleButtonState();
  }

  _toggleButtonState() {
    if (!this._allInputsValid()) {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.disabled = false;
    } else {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.disabled = true;
    }
  }

  _hideErrorMessage(inputElement) {
    const inputErrorMessage = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    inputErrorMessage.classList.remove(this._config.errorMessageClass);
    inputErrorMessage.textContent = '';
  }

  _showErrorMessage(inputElement) {
    const inputErrorMessage = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    inputErrorMessage.classList.add(this._config.errorMessageClass);
    inputErrorMessage.textContent = inputElement.validationMessage;
  }

  _allInputsValid() {
    return this._inputs.some(input => !input.validity.valid);
  }

  _checkInputValidation(inputElement) {
    if (inputElement.validity.valid) {
      this._hideErrorMessage(inputElement);
    } else {
      this._showErrorMessage(inputElement);
    }
  }

  enableValidation() {
    this._setEventListeners();
  }


}

export { FormValidator };
