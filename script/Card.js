
// Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение:
// 1. принимает в конструктор её данные и селектор её template-элемента;
// 2. содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
// 3. содержит приватные методы для каждого обработчика;
// 4. содержит один публичный метод, который возвращает полностью работоспособный и
//    наполненный данными элемент карточки.
// Для каждой карточки создайте экземпляр класса Card.


import { config } from './index.js';


class Card {

    constructor(cardName, cardLink, data) {
        this.templateSelector = data.templateSelector;
        this.cardName = cardName;
        this.cardLink = cardLink;
    }

    _getTemplate() {
        const cardTemplate = document
        .querySelector(this.templateSelector).content
        .querySelector('.card').cloneNode('true');
        return cardTemplate;
    })

    _createCard() {
        this.card = _getTemplate();
        const cardImage = this.card.querySelector('.card__image');
        const cardTitle = this.card.querySelector('.card__title');
        const cardLikeBtn = this.card.querySelector('.card__like-btn');
        const cardDeleteBtn = this.card.querySelector('.card__delete-btn');
        cardImage.src = this.cardLink;
        cardImage.alt = this.cardName;
        cardTitle.textContent = this.cardName;
        cardImage.addEventListener('click', viewCardImage);
        cardLikeBtn.addEventListener('click', addRemoveLike);
        cardDeleteBtn.addEventListener('click', deleteCard);
        return card;
    }

    _viewCardImage() {
        const card = evt.target.closest('.card');
        const cardTitle = card.querySelector('.card__title');
        popupCardImage.src = evt.target.src;
        popupCardImageTitle.textContent = cardTitle.textContent;
        openPopupWindow(popupToViewCard);
    }

    _addCard(event) {
        event.preventDefault();
        cardName = inputForCardName.value;
        cardLink = inputForImageLink.value;
        const card = new Card(cardName, cardLink, config);
        containerForCards.prepend(card);
        closePopupWindow(popupToAddCard);
    }

    _deleteCard(event) {
        const eventTarget = event.target;
        const cardToDelete = eventTarget.closest('.card');
        cardToDelete.remove();
    }

    _addRemoveLike(event) {
        const eventTarget = event.target;
        eventTarget.classList.toggle('card__like-btn_active');
    }

    _setEventListeners() {

    }

}

export { Card };