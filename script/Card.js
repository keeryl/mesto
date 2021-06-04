
// Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение:
// 1. принимает в конструктор её данные и селектор её template-элемента;
// 2. содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
// 3. содержит приватные методы для каждого обработчика;
// 4. содержит один публичный метод, который возвращает полностью работоспособный и
//    наполненный данными элемент карточки.
// Для каждой карточки создайте экземпляр класса Card.

const btnToCloseViewCardPopup = document.querySelector('.popup__close-btn_type_view-card');
const popupCardImage = document.querySelector('.popup__card-image');
const popupCardImageTitle = document.querySelector('.popup__card-image-title');
const popupToViewCard = document.querySelector('.popup_type_view-card');

class Card {

    constructor(cardName, cardLink) {
        this._cardName = cardName;
        this._cardLink = cardLink;
    }

    _getTemplate() {
        const cardTemplate = document
        .querySelector('#initialCardsTemplate').content
        .querySelector('.card').cloneNode(true);
        return cardTemplate;
    }

    _setEventListeners() {
        this.card.querySelector('.card__delete-btn').addEventListener('click', () => {this._deleteCard()});
        this.card.querySelector('.card__like-btn').addEventListener('click', () => {this._addRemoveLike()});
        this.card.querySelector('.card__image').addEventListener('click', () => {this._openCardPopup()});
        btnToCloseViewCardPopup.addEventListener('click', () => {this._closeCardPopup()});

    }

    createCard() {
        this.card = this._getTemplate();
        this._setEventListeners();
        const cardImage = this.card.querySelector('.card__image');
        const cardTitle = this.card.querySelector('.card__title');
        cardImage.src = this._cardLink;
        cardImage.alt = this._cardName;
        cardTitle.textContent = this._cardName;
        return this.card;
    }

    _openCardPopup() {
        popupCardImage.src = this._cardLink;
        popupCardImageTitle.textContent = this._cardName;
        popupToViewCard.classList.add('popup_opened');
    }

    _closeCardPopup() {
        popupCardImage.src = '';
        popupCardImageTitle.textContent = '';
        popupToViewCard.classList.remove('popup_opened');
    }

    _deleteCard() {
        this.card.remove();
    }

    _addRemoveLike() {
        this.card.querySelector('.card__like-btn').classList.toggle('card__like-btn_active');
    }
}

export { Card };