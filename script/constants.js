// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ

const inputs = Array.from(document.querySelectorAll('.popup__input'));
const popupsArray = Array.from(document.querySelectorAll('.popup'));
const profileEditBtn = document.querySelector('.profile__edit-btn'); //button to open edit profile popup
const profileAddBtn = document.querySelector('.profile__add-btn'); //button to open add card popup
const profileName = document.querySelector('.profile__name'); //<h1> with profile name in profile section
const profileDescription = document.querySelector('.profile__description'); // <p> with profile description in profile section
const formToEditProfile = document.querySelector('.popup__form_type_edit-profile'); // <form> in popup to edit profile
const formToAddCard = document.querySelector('.popup__form_type_add-card'); // <form> in popup to add card
const popupToEditProfile = document.querySelector('.popup_type_edit-profile'); // popup with form to edit profile
const popupToAddCard = document.querySelector('.popup_type_add-card'); // popup with form to add card
const popupToViewCard = document.querySelector('.popup_type_view-card'); // popup with form to view card
const inputForProfileName = document.querySelector('.popup__input_type_profile-name'); // input to enter profile name
const inputForProfileDescription = document.querySelector('.popup__input_type_profile-description'); // input to enter profile description
const inputForCardName = document.querySelector('.popup__input_type_card-name'); // input to enter card name
const inputForImageLink = document.querySelector('.popup__input_type_img-link'); // input to enter image link
const popupCardImage = document.querySelector('.popup__card-image');
const popupCardImageTitle = document.querySelector('.popup__card-image-title');
const containerForCards = document.querySelector('.cards'); // <ul> container with cards
const btnToCloseEditProfilePopup = document.querySelector('.popup__close-btn_type_edit-profile');
const btnToCloseAddCardPopup = document.querySelector('.popup__close-btn_type_add-card');
const btnToCloseViewCardPopup = document.querySelector('.popup__close-btn_type_view-card');
const initialCardsTemplate = document.querySelector('#initialCardsTemplate').content; // template to make cards

const initialCards = [
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
