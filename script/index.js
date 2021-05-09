
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ


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

function togglePopupWindow(popupElement) {
  popupElement.classList.toggle('popup_opened');
}

function getProfileContent() {
    inputForProfileName.placeholder = profileName.textContent;
    inputForProfileDescription.placeholder = profileDescription.textContent;
}

function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputForProfileName.value;
  profileDescription.textContent = inputForProfileDescription.value;
  togglePopupWindow(popupToEditProfile)
}

function viewCardImage(evt) {
  popupCardImage.src = evt.target.src;
  popupCardImageTitle.textContent = evt.target.nextElementSibling.textContent;
  togglePopupWindow(popupToViewCard);
}

function addCard(event) {
  event.preventDefault();
  cardName = inputForCardName.value;
  cardLink = inputForImageLink.value;
  const card = createCard(cardName, cardLink);
  containerForCards.prepend(card);
  togglePopupWindow(popupToAddCard);
  inputForCardName.value = '';
  inputForImageLink.value = '';
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
  togglePopupWindow(popupToEditProfile);
});
btnToCloseEditProfilePopup.addEventListener('click', function () {togglePopupWindow(popupToEditProfile);});
profileAddBtn.addEventListener('click', function () {togglePopupWindow(popupToAddCard);});
btnToCloseAddCardPopup.addEventListener('click', function () {togglePopupWindow(popupToAddCard);});
btnToCloseViewCardPopup.addEventListener('click', function () {togglePopupWindow(popupToViewCard);});
formToEditProfile.addEventListener('submit', editProfile);
formToAddCard.addEventListener('submit', addCard);

