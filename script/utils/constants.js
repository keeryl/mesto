// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ

export const profileEditBtn = document.querySelector('.profile__edit-btn'); //button to open edit profile popup
export const profileAddBtn = document.querySelector('.profile__add-btn'); //button to open add card popup
export const inputForProfileName = document.querySelector('.popup__input_type_profile-name');
export const inputForProfileDescription = document.querySelector('.popup__input_type_profile-description');
export const formToEditProfile = document.querySelector('.popup__form_type_edit-profile'); // <form> in popup to edit profile
export const formToAddCard = document.querySelector('.popup__form_type_add-card'); // <form> in popup to add card
export const popupCardImage = document.querySelector('.popup__card-image');
export const popupCardImageTitle = document.querySelector('.popup__card-image-title');
export const containerForCards = document.querySelector('.cards');

export const initialCards = [
{
  title: 'Большой барьерный риф',
  src: './blocks/card/images/big_barrier.jpg',
  alt: 'Коричневые островки посреди голубого моря'
},
{
  title: 'Амазонка',
  src: './blocks/card/images/amazonka.jpg',
  alt: 'Ветвящееся русло реки'
},
{
  title: 'Большая голубая дыра',
  src: './blocks/card/images/big_blue_hole.jpg',
  alt: 'Синее пятно посреди голубого моря'
},
{
  title: 'Антарктика',
  src: './blocks/card/images/antarktika.jpg',
  alt: 'Айсберг в море на фоне заснеженной горы'
},
{
  title: 'Гаити',
  src: './blocks/card/images/haiti.jpg',
  alt: 'Море и береговая линия зеленого острова'
},
{
  title: 'Мадагаскар',
  src: './blocks/card/images/madagaskar.jpg',
  alt: 'Берег со скудной растительностью на фоне лазурного моря'
}
];

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
  formSelector: '.popup__form',
  popupToAddCardSelector: '.popup_type_add-card',
  popupToViewCardSelector: '.popup_type_view-card',
  popupToEditProfileSelector: '.popup_type_edit-profile',
  userNameSelector: '.profile__name',
  userInfoSelector: '.profile__description',
  popupImageSelector: '.popup__card-image',
  popupImageTitleSelector: '.popup__card-image-title'
}