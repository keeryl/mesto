

class Card {

    constructor(cardName, cardLink, config) {
        this._cardName = cardName;
        this._cardLink = cardLink;
        this._config = config;
    }

    _getTemplate() {
        const cardTemplate = document
        .querySelector(this._config.templateSelector).content
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
