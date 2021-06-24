
import { Popup } from './Popup.js';
import { config
       } from '../utils/constants.js';


class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector(config.popupImageSelector);
    this._popupImageTitle = this._popup.querySelector(config.popupImageTitleSelector);
  }

  open(cardLink, cardName) {

    super.open();
    this._popupImage.src = cardLink;
    this._popupImageTitle.textContent = cardName;
    this._popupImage.alt = cardName;
  }

}

export { PopupWithImage };
