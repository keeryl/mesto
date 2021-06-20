
import {
  popupCardImage,
  popupCardImageTitle,
 } from '../utils/constants.js';

 import { viewCardPopup } from '../../pages/index.js';

export function handleCardClick(cardLink, cardName) {
  popupCardImage.src = cardLink;
  popupCardImageTitle.textContent = cardName;
  viewCardPopup.open(cardLink, cardName);
}
