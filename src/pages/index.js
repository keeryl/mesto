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

api.getUserInfo()
.then((result) => {
  currentUserId = result._id;
  userInfo.setUserInfo(result.name, result.about);
  userInfo.setUserAvatar(result.avatar);
})
.catch(error => {
  console.log(error);
});

api.getInitialCards()
.then(result => {
  console.log(result);
  cardsList.renderItems(result);
})
.catch(error => {
  console.log(error);
})

const cardsList = new Section({
  renderer: (item) => {
      const cardElement = createCard(item.name, item.link, item.likes, item.owner._id, item._id);
      cardsList.addItem(cardElement);
  }
}, config.containerForCards);

const editAvatarPopup = new PopupWithForm(config.popupEditAvatarSelector, {
  submitForm: (formData) => {
    api.editAvatar(formData.avatarLink)
    .then(result => {
      editAvatarPopup.setButtonTextOnPending();
      userInfo.setUserAvatar(result.avatar);
      editAvatarPopup.close();
      editAvatarPopup.setDefaultButtonText('Сохранить');
    })
    .catch(error => {
      console.log(error);
    })
  },
  resetForm: () => {
    formToEditAvatarValidator.resetForm();
  }
});

editAvatarPopup.setEventListeners();

const addCardPopup = new PopupWithForm(config.popupToAddCardSelector, {
  submitForm: (formData) => {
    api.addCard(formData.cardName, formData.imgLink)
    .then(result => {
      addCardPopup.setButtonTextOnPending();
      const cardElement = createCard(result.name, result.link, result.likes, result.owner._id, result._id);
      cardsList.addItem(cardElement);
      addCardPopup.close();
      addCardPopup.setDefaultButtonText('Создать');
    })
    .catch(error => {
      console.log(error);
    })
  },
  resetForm: () => {
    formToAddCardValidator.resetForm();
  }
});

addCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm(config.popupToEditProfileSelector, {
  submitForm: (formData) => {
    api.editUserProfile(formData.profileTitle, formData.profileDescription)
    .then(result => {
      editProfilePopup.setButtonTextOnPending();
      userInfo.setUserInfo(result.name, result.about);
      editProfilePopup.close();
      editProfilePopup.setDefaultButtonText('Сохранить');
    })
    .catch(error => {
      console.log(error);
    });
  },
  resetForm: () => {
    formToEditProfileValidator.resetForm();
  }
});
editProfilePopup.setEventListeners();

const deleteCardPopup = new PopupWithButton(config.popupDeleteCardSelector, config.confirmationButtonSelector, {
  handleConfirmationButton: (cardId, cardElement) => {
    api.deleteCard(cardId)
    .then(result => {
      deleteCardPopup.setButtonTextOnPending();
      //document.getElementById(cardId).remove();
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

function createCard(cardTitle, cardLink, likeArr, cardOwnerId, cardId) {
  const card = new Card(cardTitle, cardLink, likeArr, cardOwnerId, cardId, config, {
    handleCardClick:  (cardLink, cardName) => {
      viewCardPopup.open(cardLink, cardName);
    },
    isOwner: (cardOwnerId) => {
        return currentUserId === cardOwnerId;
    },
    hasUserLike: (likeArr) => {
      return likeArr.some(item => {
        return item._id === currentUserId;
      });
    },
    addLike: (cardId)=> {
      api.addLike(cardId)
      .then(result => {
        console.log('Лайк добален');
        card.setLikesCounter(result);
        card.getLikes(result.likes);
      })
      .catch(error => {
        console.log(error);
      });
    },
    removeLike: (cardId) => {
      api.removeLike(cardId)
      .then(result => {
        console.log('Лайк удален');
        card.setLikesCounter(result);
        card.getLikes(result.likes);
      })
      .catch(error => {
        console.log(error);
      });
    },
    handleDeleteCardBtn: (cardId, cardElement) => {
      deleteCardPopup.open();
      deleteCardPopup.getCardId(cardId, cardElement);
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

