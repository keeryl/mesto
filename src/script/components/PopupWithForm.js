
import { Popup } from './Popup.js';
import { config } from '../utils/constants.js';

class PopupWithForm extends Popup {

  constructor(popupSelector, { submitForm,  resetForm}) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._resetForm = resetForm;
  }

  _getInputValues() {
    const inputs = Array.from(this._popup.querySelectorAll(config.inputSelector));
    return inputs;
  }

  setEventListeners() {
    
    this._popup.querySelector(config.closeBtnSelector)
    .addEventListener('click', this.close.bind(this));

    this._popup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });

    this._popup.querySelector(config.formSelector)
    .addEventListener('submit', (evt) => {
      evt.preventDefault();
      const inputsArr = this._getInputValues();
      this._submitForm(inputsArr[0].value, inputsArr[1].value);
      this.close();
    });
  }

  close() {
    this._popup.classList.remove(config.popupOpenedClass);
    document.removeEventListener('keydown', super._closeOnEsc.bind(this));
    this._popup.querySelector(config.formSelector).reset();
    this._resetForm();
  }
}

export { PopupWithForm };