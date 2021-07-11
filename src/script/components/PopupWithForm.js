
import { Popup } from './Popup.js';
import { config } from '../utils/constants.js';

class PopupWithForm extends Popup {

  constructor(popupSelector, { submitForm,  resetForm}) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._resetForm = resetForm;
    this._form = this._popup.querySelector(config.formSelector);
    this._formBtn = this._form.querySelector(config.popupSubmitBtn);
    this._inputsArr = Array.from(this._popup.querySelectorAll(config.inputSelector));
  }

  _getInputValues() {
    const formData = {};
    this._inputsArr.forEach(item => {
      formData[item.name] = item.value;
    });
    return formData;

  }

  setEventListeners() {
    super.setEventListeners();
    this._form
    .addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formData = this._getInputValues();
      this._submitForm(this._formData);
    });
  }

  close() {
    super.close();
    this._resetForm();
  }

  setButtonTextOnPending () {
    this._formBtn.textContent = 'Сохранение...';
  }

  setDefaultButtonText (text) {
    this._formBtn.textContent = text;
  }

}

export { PopupWithForm };
