const popupOpenButton = document.querySelector('.profile__edit-btn');
const popupCloseButton = document.querySelectorAll('.popup__form-close-btn');
const profileName = document.querySelectorAll('.profile__name');
const profileDescription = document.querySelectorAll('.profile__description');
const form = document.querySelectorAll('.popup__form');
const input = document.querySelectorAll('.popup__form-input');
const popup = document.querySelectorAll('.popup');
const addPlaceBtn = document.querySelector('.profile__add-btn');
const cards = document.querySelector('.cards');
const closeCardPopup = document.querySelector('.card-popup-container__close-btn');
const initialCardsTemplate = document.querySelector('#initialCardsTemplate').content;

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

showInitialCards();

const cardLikeBtns = document.querySelectorAll('.card__like-btn');
const cardDeleteBtns = document.querySelectorAll('.card__delete-btn');
const cardImages = document.querySelectorAll('.card__image');

cardLikeBtns.forEach(item => {item.addEventListener('click', addRemoveLike)});
cardDeleteBtns.forEach(item => {item.addEventListener('click', deleteCard)});
cardImages.forEach(item => {item.addEventListener('click', openCloseCardImagePopup)})

function openCloseCardImagePopup (event) {
  const clickedCardImage = event.target;
  const clickedCardTitle = document.querySelector('.card__label').children[0];
  const cardPopupImage = document.querySelector('.card-popup-container__image');
  const cardPopupImageTitle = document.querySelector('.card-popup-container__image-title');

  popup[2].classList.toggle('popup_opened');
  if (popup[2].classList.contains('popup_opened')) {
    cardPopupImage.src = clickedCardImage.src;
    cardPopupImageTitle.textContent = clickedCardTitle.textContent;
  }
}


function showInitialCards () {
  initialCards.forEach(item => {
    const card = initialCardsTemplate.querySelector('.card').cloneNode(false);
    const cardImage = initialCardsTemplate.querySelector('.card__image').cloneNode(true);
    const cardLable = initialCardsTemplate.querySelector('.card__label').cloneNode(false);
    const cardTitle = initialCardsTemplate.querySelector('.card__title').cloneNode(true);
    const cardLikeBtn = initialCardsTemplate.querySelector('.card__like-btn').cloneNode(true);
    const cardDeleteBtn = initialCardsTemplate.querySelector('.card__delete-btn').cloneNode(true);
    cardImage.src = item.src;
    cardImage.alt = item.alt;
    cardTitle.textContent = item.title;
    cardLable.append(cardTitle, cardLikeBtn);
    card.append(cardImage);
    card.append(cardLable, cardDeleteBtn);
    cards.append(card);
  });
}

function getProfileContent () {
  if (popup[0].classList.contains('popup_opened')) {
    input[0].value = profileName[0].textContent;
    input[1].value = profileDescription[0].textContent;
  }
}

function popupOpenClose() {
  popup[0].classList.toggle('popup_opened');
  getProfileContent();
}

function editProfile(evt) {
  evt.preventDefault();
  const name = input[0].value;
  const description = input[1].value;
  profileName[0].textContent = name;
  profileDescription[0].textContent = description;
  popupOpenClose();
}

function openCloseAddPlacePopup() {
  popup[1].classList.toggle('popup_opened');
}

function addPlaceCard (event) {
  event.preventDefault();
  const card = initialCardsTemplate.querySelector('.card').cloneNode(false);
  const cardImage = initialCardsTemplate.querySelector('.card__image').cloneNode(true);
  const cardLable = initialCardsTemplate.querySelector('.card__label').cloneNode(false);
  const cardTitle = initialCardsTemplate.querySelector('.card__title').cloneNode(true);
  const cardLikeBtn = initialCardsTemplate.querySelector('.card__like-btn').cloneNode(true);
  const cardDeleteBtn = initialCardsTemplate.querySelector('.card__delete-btn').cloneNode(true);
  cardLable.append(cardTitle, cardLikeBtn);
  card.append(cardImage);
  card.append(cardLable, cardDeleteBtn);
  cards.prepend(card);
  cardImage.src = input[3].value;
  cardImage.alt = '';
  cardTitle.textContent = input[2].value;
  input[2].value = 'Название';
  input[3].value = 'Ссылка на картинку';
  openCloseAddPlacePopup();
}

function addRemoveLike (event) {
  const eventTarget = event.target;
  eventTarget.classList.toggle('card__like-btn_active');
}

function deleteCard (event) {
  const eventTarget = event.target;
  const cardToDelete = eventTarget.closest('.card');
  cardToDelete.remove();
}

popupOpenButton.addEventListener('click', popupOpenClose);
form[0].addEventListener('submit', editProfile);
form[1].addEventListener('submit', addPlaceCard);
popupCloseButton[0].addEventListener('click', popupOpenClose);
popupCloseButton[1].addEventListener('click', openCloseAddPlacePopup);
closeCardPopup.addEventListener('click', openCloseCardImagePopup);
addPlaceBtn.addEventListener('click', openCloseAddPlacePopup);
