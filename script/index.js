

// ФУНКЦИИ


function createCard(cardName, cardLink) {
    const card = initialCardsTemplate.querySelector('.card').cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const cardLikeBtn = card.querySelector('.card__like-btn');
    const cardDeleteBtn = card.querySelector('.card__delete-btn');
    cardImage.src = cardLink;
    cardImage.alt = cardName;
    cardTitle.textContent = cardName;
    cardImage.addEventListener('click', viewCardImage);
    cardLikeBtn.addEventListener('click', addRemoveLike);
    cardDeleteBtn.addEventListener('click', deleteCard);
    return card;
}

function showInitialCards () {
  initialCards.forEach(item => {
    const card = createCard(item.title, item.src);
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

function openPopupWindow (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      popupElement.classList.remove('popup_opened');
      resetForm(popupElement);
    }
  });

}

function closePopupWindow (popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', function (evt){
    if (evt.key === 'Escape') {
      popupElement.classList.remove('popup_opened');
      resetForm(popupElement);
    }
  });
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

function viewCardImage(evt) {
  const card = evt.target.closest('.card');
  const cardTitle = card.querySelector('.card__title');
  popupCardImage.src = evt.target.src;
  popupCardImageTitle.textContent = cardTitle.textContent;
  openPopupWindow(popupToViewCard);
}

function addCard(event) {
  event.preventDefault();
  cardName = inputForCardName.value;
  cardLink = inputForImageLink.value;
  const card = createCard(cardName, cardLink);
  containerForCards.prepend(card);
  closePopupWindow(popupToAddCard);
  resetForm(popupToAddCard);
}

function addRemoveLike(event) {
  const eventTarget = event.target;
  eventTarget.classList.toggle('card__like-btn_active');
}

function deleteCard(event) {
  const eventTarget = event.target;
  const cardToDelete = eventTarget.closest('.card');
  cardToDelete.remove();
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
      resetForm(popupElement);
    }
  });
});


const config = {
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
