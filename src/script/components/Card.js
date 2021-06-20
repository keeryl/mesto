

class Card {

    constructor(cardName, cardLink, config, handleCardClick) {
        this._cardName = cardName;
        this._cardLink = cardLink;
        this._config = config;
        this._handleCardClick = handleCardClick;
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
        this.card.querySelector('.card__image').addEventListener('click', () => {this._handleCardClick(this._cardLink, this._cardName)});
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

    _deleteCard() {
        this.card.remove();
    }

    _addRemoveLike() {
        this.card.querySelector('.card__like-btn').classList.toggle('card__like-btn_active');
    }
}

export { Card };
