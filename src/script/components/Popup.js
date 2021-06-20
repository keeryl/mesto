
import { config } from '../utils/constants.js';

class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  setEventListeners() {
    this._popup.querySelector(config.closeBtnSelector)
    .addEventListener('click', this.close.bind(this));

    this._popup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }

  open() {
    this._popup.classList.add(config.popupOpenedClass);
    document.addEventListener('keydown', this._closeOnEsc.bind(this));
  }

  close() {
    this._popup.classList.remove(config.popupOpenedClass);
    document.removeEventListener('keydown', this._closeOnEsc.bind(this));
  }

  _closeOnEsc(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  
}

export { Popup };