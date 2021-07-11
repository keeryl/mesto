////////// Webpack imports //////////
import './index.css';
///////////***************//////////

import { Section } from '../script/components/Section.js';
import { FormValidator } from '../script/components/FormValidator.js';
import { Card } from '../script/components/Card.js';
import { PopupWithForm } from '../script/components/PopupWithForm.js';
import { PopupWithImage } from '../script/components/PopupWithImage.js';
import { UserInfo } from '../script/components/UserInfo.js';
import { Api } from '../script/components/Api.js';
import { PopupWithButton } from '../script/components/PopupWithButton.js';
import { config,
         profileEditBtn,
         profileAddBtn,
         avatarEditBtn,
         formToEditProfile,
         formToAddCard,
         formToEditAvatar,
         inputForProfileName,
         inputForProfileDescription,
        } from '../script/utils/constants.js';

let currentUserId;

// КЛАССЫ

const api = new Api(config);

const getUserInfo = api.getUserInfo()
const getInitialCards = api.getInitialCards();

Promise.all([getUserInfo, getInitialCards])
.then(result => {
  currentUserId = result[0]._id;
  userInfo.setUserInfo(result[0].name, result[0].about);
  userInfo.setUserAvatar(result[0].avatar);
  cardsList.renderItems(result[1]);
})
.catch(error => {
  console.log(error);
})

const cardsList = new Section({
  renderer: (item) => {
      const cardElement = createCard(item.name, item.link, item.likes, item.owner._id, item._id, currentUserId);
      cardsList.addItem(cardElement);
  }
}, config.containerForCards);

const editAvatarPopup = new PopupWithForm(config.popupEditAvatarSelector, {
  submitForm: (formData) => {
    editAvatarPopup.setButtonTextOnPending();
    api.editAvatar(formData.avatarLink)
    .then(result => {
      userInfo.setUserAvatar(result.avatar);
      editAvatarPopup.close();
    })
    .catch(error => {
      console.log(error);
    })
    .finally( () => {
      editAvatarPopup.setDefaultButtonText('Сохранить');
    });
  },
  resetForm: () => {
    formToEditAvatarValidator.resetForm();
  }
});

editAvatarPopup.setEventListeners();

const addCardPopup = new PopupWithForm(config.popupToAddCardSelector, {
  submitForm: (formData) => {
    addCardPopup.setButtonTextOnPending();
    api.addCard(formData.cardName, formData.imgLink)
    .then(result => {
      const cardElement = createCard(result.name, result.link, result.likes, result.owner._id, result._id, currentUserId);
      cardsList.addItem(cardElement);
      addCardPopup.close();
    })
    .catch(error => {
      console.log(error);
    })
    .finally( () => {
      addCardPopup.setDefaultButtonText('Создать');
    });
  },
  resetForm: () => {
    formToAddCardValidator.resetForm();
  }
});

addCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm(config.popupToEditProfileSelector, {
  submitForm: (formData) => {
    editProfilePopup.setButtonTextOnPending();
    api.editUserProfile(formData.profileTitle, formData.profileDescription)
    .then(result => {
      userInfo.setUserInfo(result.name, result.about);
      editProfilePopup.close();
    })
    .catch(error => {
      console.log(error);
    })
    .finally( () => {
      editProfilePopup.setDefaultButtonText('Сохранить');
    });
  },
  resetForm: () => {
    formToEditProfileValidator.resetForm();
  }
});
editProfilePopup.setEventListeners();

const deleteCardPopup = new PopupWithButton(config.popupDeleteCardSelector, config.confirmationButtonSelector, {
  handleConfirmationButton: (cardId, cardElement) => {
    deleteCardPopup.setButtonTextOnPending();
    api.deleteCard(cardId)
    .then(result => {
      cardElement.remove();
      deleteCardPopup.close();
      deleteCardPopup.setDefaultButtonText();
    })
    .catch(error => {
      console.log(error);
    })
  },
})
deleteCardPopup.setEventListeners();

const viewCardPopup = new PopupWithImage(config.popupToViewCardSelector);
viewCardPopup.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: config.userNameSelector,
  infoSelector: config.userInfoSelector,
  avatarSelector: config.userAvatarSelector,
});

const formToEditProfileValidator = new FormValidator(config, formToEditProfile);
formToEditProfileValidator.enableValidation();

const formToAddCardValidator = new FormValidator(config, formToAddCard);
formToAddCardValidator.enableValidation();

const formToEditAvatarValidator = new FormValidator(config, formToEditAvatar);
formToEditAvatarValidator.enableValidation();

// ФУНКЦИИ

function createCard(cardTitle, cardLink, likeArr, cardOwnerId, cardId, currentUserId) {
  const card = new Card(cardTitle, cardLink, likeArr, cardOwnerId, cardId, currentUserId, config, {
    handleCardClick:  (cardLink, cardName) => {
      viewCardPopup.open(cardLink, cardName);
    },
    updateLikes: (cardId) => {
      if (card.hasUserLike()) {
        api.removeLike(cardId)
        .then(result => {
          console.log('Лайк удален');
          card.updateLikes(result.likes);
        })
        .catch(error => {
          console.log(error);
        });
      } else {
        api.addLike(cardId)
        .then(result => {
          console.log('Лайк добален');
          card.updateLikes(result.likes);
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
    handleDeleteCardBtn: (cardId, cardElement) => {
      deleteCardPopup.open(cardId, cardElement);
    },
  });
  const cardElement = card.createCard();
  return cardElement;
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

avatarEditBtn.addEventListener('click', () => {
  editAvatarPopup.open();
});

