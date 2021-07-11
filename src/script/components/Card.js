

class Card {

    constructor(cardName, cardLink, likeArr, cardOwnerId, cardId, currentUserId, config, { handleCardClick, updateLikes, handleDeleteCardBtn }) {
        this._cardName = cardName;
        this._cardLink = cardLink;
        this._likeArr = likeArr;
        this._cardOwnerId = cardOwnerId;
        this._cardId = cardId;
        this._currentUserId = currentUserId;
        this._config = config;
        this._handleCardClick = handleCardClick;
        this._updateLikes = updateLikes;
        this._handleDeleteCardBtn = handleDeleteCardBtn;
    }

    _getTemplate () {
        const cardTemplate = document
        .querySelector(this._config.templateSelector).content
        .querySelector('.card').cloneNode(true);
        return cardTemplate;
    }

    _setEventListeners () {
        this.card.querySelector('.card__delete-btn').addEventListener('click', () => {
          this._handleDeleteCardBtn(this._cardId, this.card);

        });
        this.card.querySelector('.card__like-btn').addEventListener('click', () => {
          this._updateLikes(this._cardId);
        });
        this.card.querySelector('.card__image').addEventListener('click', () => {
          this._handleCardClick(this._cardLink, this._cardName);
        });
    }

    _isOwner () {
      return this._currentUserId === this._cardOwnerId;
    }

    createCard () {
        this.card = this._getTemplate();
        this._setEventListeners();
        const cardImage = this.card.querySelector('.card__image');
        const cardTitle = this.card.querySelector('.card__title');
        if (!this._isOwner()) {
          this.card.querySelector('.card__delete-btn').remove();
        }
        if (this.hasUserLike()) {
        this.card.querySelector('.card__like-btn').classList.add('card__like-btn_active');
        } else {
        this.card.querySelector('.card__like-btn').classList.remove('card__like-btn_active');
        }
        const likesCounter = this.card.querySelector('.card__like-counter');
        likesCounter.textContent = this._likeArr.length;
        cardImage.src = this._cardLink;
        cardImage.alt = this._cardName;
        cardTitle.textContent = this._cardName;
        return this.card;
    }

    hasUserLike () {
        return this._likeArr.some(item => {
          return item._id === this._currentUserId;
        });
    }


    _renderLikes () {
      this.card.querySelector('.card__like-counter').textContent = this._likeArr.length;
      this.card.querySelector('.card__like-btn').classList.toggle('card__like-btn_active');
    }

    updateLikes (likesArr) {
      this._likeArr = likesArr;
      this._renderLikes();
    }

}

export { Card };
