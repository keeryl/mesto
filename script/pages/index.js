
import { Section } from '../components/Section.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { initialCards,
         config,
         popupCardImage,
         popupCardImageTitle,
         profileEditBtn,
         profileAddBtn,
         formToEditProfile,
         formToAddCard,
         containerForCards,
         inputForProfileName,
         inputForProfileDescription
        } from '../utils/constants.js';


// КЛАССЫ

const cardsList = new Section({ 
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.title, item.src, config, handleCardClick);
    const cardElement = card.createCard();
    cardsList.addItem(cardElement);
  }
}, config.containerForCards);

cardsList.renderItems();


const addCardPopup = new PopupWithForm(config.popupToAddCardSelector, { 
  submitForm: (cardTitle, cardLink) => {
    const card = new Card(cardTitle, cardLink, config, handleCardClick);
    const cardElement = card.createCard();
    containerForCards.prepend(cardElement);
  },
  resetForm: () => {
    formToAddCardValidator.resetForm();
  }
});
addCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm(config.popupToEditProfileSelector, {
  submitForm: (name, info) => {
    userInfo.setUserInfo(name, info);
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


function handleCardClick(cardLink, cardName) {
  popupCardImage.src = cardLink;
  popupCardImageTitle.textContent = cardName;
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





