////////// Webpack imports //////////
import './index.css';
///////////***************//////////

import { Section } from '../script/components/Section.js';
import { FormValidator } from '../script/components/FormValidator.js';
import { Card } from '../script/components/Card.js';
import { PopupWithForm } from '../script/components/PopupWithForm.js';
import { PopupWithImage } from '../script/components/PopupWithImage.js';
import { UserInfo } from '../script/components/UserInfo.js';
import { initialCards,
         config,
         profileEditBtn,
         profileAddBtn,
         formToEditProfile,
         formToAddCard,
         inputForProfileName,
         inputForProfileDescription,
        } from '../script/utils/constants.js';


// КЛАССЫ

const cardsList = new Section({
  renderer: (item) => {
    const cardElement = createCard(item.title, item.src);
    cardsList.addItem(cardElement);
  }
}, config.containerForCards);

cardsList.renderItems(initialCards);


const addCardPopup = new PopupWithForm(config.popupToAddCardSelector, {
  submitForm: (formData) => {
    const cardElement = createCard(formData.cardName, formData.imgLink);
    cardsList.addItem(cardElement);
  },
  resetForm: () => {
    formToAddCardValidator.resetForm();
  }
});
addCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm(config.popupToEditProfileSelector, {
  submitForm: (formData) => {
    userInfo.setUserInfo(formData.profileTitle, formData.profileDescription);
  },
  resetForm: () => {
    formToEditProfileValidator.resetForm();
  }
});
editProfilePopup.setEventListeners();

const viewCardPopup = new PopupWithImage(config.popupToViewCardSelector);
viewCardPopup.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: config.userNameSelector,
  infoSelector: config.userInfoSelector
});

const formToEditProfileValidator = new FormValidator(config, formToEditProfile);
formToEditProfileValidator.enableValidation();

const formToAddCardValidator = new FormValidator(config, formToAddCard);
formToAddCardValidator.enableValidation();


// ФУНКЦИИ

function createCard(cardTitle, cardLink) {
  const card = new Card(cardTitle, cardLink, config, handleCardClick);
  const cardElement = card.createCard();
  return cardElement;
}

function handleCardClick(cardLink, cardName) {
  viewCardPopup.open(cardLink, cardName);
}


// ОБРАБОТЧИКИ СОБЫТИЙ


profileEditBtn.addEventListener('click', () => {
  const profileContent = userInfo.getUserInfo();
  inputForProfileName.value = profileContent.name;
  inputForProfileDescription.value = profileContent.description;
  editProfilePopup.open();
});

profileAddBtn.addEventListener('click', () => {
  addCardPopup.open();
});

