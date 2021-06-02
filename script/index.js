
import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';

// ФУНКЦИИ

function showInitialCards () {
  initialCards.forEach(item => {
    const card = new Card(item.title, item.src, config);
    containerForCards.append(card);
  });
}

showInitialCards();

function resetForm (popupElement) {
  const inputs = Array.from(popupElement.querySelectorAll('.popup__input'));
  if (Boolean(popupElement.querySelector('.popup__form'))) {
    popupElement.querySelector('.popup__form').reset();
    inputs.forEach(inputElement => {hideErrorMessage(inputElement, config);});
  }
}

function closePopupWindowOnEsc (evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopupWindow(openedPopup);
  }
}

function openPopupWindow (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWindowOnEsc); // спасибо
}

function closePopupWindow (popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWindowOnEsc); // спасибо
  resetForm(popupElement);
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

// ОБРАБОТЧИКИ СОБЫТИЙ


profileEditBtn.addEventListener('click', function () {
  getProfileContent();
  openPopupWindow(popupToEditProfile);
});
btnToCloseEditProfilePopup.addEventListener('click', function () {closePopupWindow(popupToEditProfile);});
profileAddBtn.addEventListener('click', function () {openPopupWindow(popupToAddCard);});
btnToCloseAddCardPopup.addEventListener('click', function () {closePopupWindow(popupToAddCard);});
btnToCloseViewCardPopup.addEventListener('click', function () {closePopupWindow(popupToViewCard);});
formToEditProfile.addEventListener('submit', editProfile);
formToAddCard.addEventListener('submit', addCard);


popupsArray.forEach(popupElement => {
  popupElement.addEventListener('click', function (evt) {
    if (evt.target === evt.currentTarget) {
      closePopupWindow(popupElement);
    }
  });
});


const config = {
  templateSelector: '#initialCardsTemplate';
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

enableValidation(config);

export { config };
