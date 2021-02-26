let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-btn');
let popupCloseButton = document.querySelector('.popup__form-close-btn');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let form = document.querySelector('.popup__form')
let input = document.querySelectorAll('.popup__form-input');

function popupOpenClose() {
  popup.classList.toggle('popup_opened');
}

function editProfile(evt) {
  evt.preventDefault();
  let name = input[0].value;
  let description = input[1].value;
  profileName.textContent = name;
  profileDescription.textContent = description;
  popupOpenClose();
}


popupOpenButton.addEventListener('click', popupOpenClose);
form.addEventListener('submit', editProfile);
popupCloseButton.addEventListener('click', popupOpenClose);
