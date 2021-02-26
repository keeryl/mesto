let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-btn');
let popupCloseButton = document.querySelector('.popup__form-close-btn');

function popupOpenClose() {
  popup.classList.toggle('popup_opened');
}

popupOpenButton.addEventListener('click', popupOpenClose);
popupCloseButton.addEventListener('click', popupOpenClose);
