import { Popup } from './Popup.js';


class PopupWithButton extends Popup {

  constructor (popupSelector, confirmationButtonSelector, { handleConfirmationButton }) {
    super(popupSelector);
    this._confirmationButton = this._popup.querySelector(confirmationButtonSelector);
    this._handleConfirmationButton = handleConfirmationButton;
    this._cardId;
  }

  setEventListeners () {
    super.setEventListeners();
    this._confirmationButton.addEventListener('click', () => {
      this._handleConfirmationButton(this._cardId);
    });
  }

  getCardId (cardId) {
    this._cardId = cardId;
  }

  setButtonTextOnPending () {
    this._confirmationButton.textContent = 'Сохранение...';
  }

  setDefaultButtonText () {
    this._confirmationButton.textContent = 'Да';
  }

}

export { PopupWithButton };
