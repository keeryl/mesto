
import { Popup } from './Popup.js';
import { config
       } from '../utils/constants.js';


class PopupWithImage extends Popup {
  
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(cardLink, cardName) {

    this._popup.classList.add(config.popupOpenedClass);
    
    document.addEventListener('keydown', super._closeOnEsc.bind(this));
    
    this._popup.querySelector(config.popupImageSelector).src = cardLink;
    
    this._popup.querySelector(config.popupImageTitleSelector).textContent = cardName;
  }

}

export { PopupWithImage };