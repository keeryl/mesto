
import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';

const config = {
  templateSelector: '#initialCardsTemplate',
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_state_inactive',
  inputErrorClass: 'popup__input_state_error',
  errorMessageClass: 'popup__input-error_state_visible',
  closeBtnSelector: '.popup__close-btn',
  popupSelector: '.popup',
  popupOpenedClass: 'popup_opened'
}


// ФУНКЦИИ

function showInitialCards () {
  initialCards.forEach(item => {
    const card = new Card(item.title, item.src, config);
    const cardElement = card.createCard();
    containerForCards.append(cardElement);
  });
}

showInitialCards();

function closePopupWindowOnEsc (evt) {
  const openedPopup = document.querySelector(config.popupOpenedClass);
  if (evt.key === 'Escape') {
    closePopupWindow(openedPopup);
  }
}

function openPopupWindow (popupElement) {
  popupElement.classList.add(config.popupOpenedClass);
  document.addEventListener('keydown', closePopupWindowOnEsc);
}

function closePopupWindow (popupElement) {
  popupElement.classList.remove(config.popupOpenedClass);
  document.removeEventListener('keydown', closePopupWindowOnEsc);
  formToEditProfileValidator.resetForm();
  formToAddCardValidator.resetForm();

}

function getProfileContent () {
    inputForProfileName.value = profileName.textContent;
    inputForProfileDescription.value = profileDescription.textContent;
}

function editProfile (evt) {
  evt.preventDefault();
  profileName.textContent = inputForProfileName.value;
  profileDescription.textContent = inputForProfileDescription.value;
  closePopupWindow(popupToEditProfile)
}

function addCard(event) {
  event.preventDefault();
  const cardName = inputForCardName.value;
  const cardLink = inputForImageLink.value;
  const card = new Card(cardName, cardLink, config);
  const cardElement = card.createCard();
  containerForCards.prepend(cardElement);
  closePopupWindow(popupToAddCard);
}

// ОБРАБОТЧИКИ СОБЫТИЙ


profileEditBtn.addEventListener('click', function () {
  getProfileContent();
  openPopupWindow(popupToEditProfile);
});
btnToCloseEditProfilePopup.addEventListener('click', function () {closePopupWindow(popupToEditProfile);});
profileAddBtn.addEventListener('click', function () {openPopupWindow(popupToAddCard);});
btnToCloseAddCardPopup.addEventListener('click', function () {closePopupWindow(popupToAddCard);});
formToEditProfile.addEventListener('submit', editProfile);
formToAddCard.addEventListener('submit', addCard);


popupsArray.forEach(popupElement => {
  popupElement.addEventListener('click', function (evt) {
    if (evt.target === evt.currentTarget) {
      closePopupWindow(popupElement);
    }
  });
});


const formToEditProfileValidator = new FormValidator(config, formToEditProfile);
formToEditProfileValidator.enableValidation();
const formToAddCardValidator = new FormValidator(config, formToAddCard);
formToAddCardValidator.enableValidation();
