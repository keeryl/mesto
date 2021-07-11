
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ

export const profileEditBtn = document.querySelector('.profile__edit-btn'); //button to open edit profile popup
export const profileAddBtn = document.querySelector('.profile__add-btn'); //button to open add card popup
export const avatarEditBtn = document.querySelector('.profile__avatar-btn');
export const inputForProfileName = document.querySelector('.popup__input_type_profile-name');
export const inputForProfileDescription = document.querySelector('.popup__input_type_profile-description');
export const formToEditProfile = document.querySelector('.popup__form_type_edit-profile'); // <form> in popup to edit profile
export const formToAddCard = document.querySelector('.popup__form_type_add-card'); // <form> in popup to add card
export const formToEditAvatar = document.querySelector('.popup__form_type_edit-avatar');
export const popupCardImage = document.querySelector('.popup__card-image');
export const popupCardImageTitle = document.querySelector('.popup__card-image-title');
export const containerForCards = document.querySelector('.cards');
export const config = {
  templateSelector: '#initialCardsTemplate',
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_state_inactive',
  inputErrorClass: 'popup__input_state_error',
  errorMessageClass: 'popup__input-error_state_visible',
  closeBtnSelector: '.popup__close-btn',
  popupSelector: '.popup',
  popupOpenedClass: 'popup_opened',
  popupOpenedSelector: '.popup_opened',
  containerForCards: '.cards',
  cardLikeBtn: '.card__like-btn',
  popupToAddCardSelector: '.popup_type_add-card',
  popupToViewCardSelector: '.popup_type_view-card',
  popupToEditProfileSelector: '.popup_type_edit-profile',
  userAvatarSelector: '.profile__photo',
  userNameSelector: '.profile__name',
  userInfoSelector: '.profile__description',
  popupImageSelector: '.popup__card-image',
  popupImageTitleSelector: '.popup__card-image-title',
  popupEditAvatarSelector: '.popup_type_edit-avatar',
  popupDeleteCardSelector: '.popup_type_delete-card',
  confirmationButtonSelector: '.popup__submit-btn_type_delete-card',
  popupSubmitBtn: '.popup__submit-btn',
  token: '4e3158fe-c157-45ee-9ba8-36277de198c7',
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25',
}
