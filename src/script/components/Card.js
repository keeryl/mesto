

class Card {

    constructor(cardName, cardLink, likeArr, cardOwnerId, cardId, config, { handleCardClick, isOwner, hasUserLike, addLike, removeLike, handleDeleteCardBtn }) {
        this._cardName = cardName;
        this._cardLink = cardLink;
        this._likeArr = likeArr;
        this._cardOwnerId = cardOwnerId;
        this._cardId = cardId;
        this._config = config;
        this._handleCardClick = handleCardClick;
        this._isOwner = isOwner;
        this._hasUserLike = hasUserLike;
        this._addLike = addLike;
        this._removeLike = removeLike;
        this._handleDeleteCardBtn = handleDeleteCardBtn;
    }

    _getTemplate() {
        const cardTemplate = document
        .querySelector(this._config.templateSelector).content
        .querySelector('.card').cloneNode(true);
        return cardTemplate;
    }

    _setEventListeners() {
        this.card.querySelector('.card__delete-btn').addEventListener('click', () => {
          this._handleDeleteCardBtn(this._cardId);

        });
        this.card.querySelector('.card__like-btn').addEventListener('click', () => {
          this._addRemoveLike()
        });
        this.card.querySelector('.card__image').addEventListener('click', () => {
          this._handleCardClick(this._cardLink, this._cardName);
        });
    }

    createCard() {
        this.card = this._getTemplate();
        this._setEventListeners();
        const cardImage = this.card.querySelector('.card__image');
        const cardTitle = this.card.querySelector('.card__title');
        if (!this._isOwner(this._cardOwnerId)) {
          this.card.querySelector('.card__delete-btn').remove();
        }
        if (this._hasUserLike(this._likeArr)) {
          this.card.querySelector('.card__like-btn').classList.add('card__like-btn_active');
        } else {
          this.card.querySelector('.card__like-btn').classList.remove('card__like-btn_active');
        }
        const likesCounter = this.card.querySelector('.card__like-counter');
        likesCounter.textContent = this._likeArr.length;
        cardImage.src = this._cardLink;
        cardImage.alt = this._cardName;
        cardTitle.textContent = this._cardName;
        this.card.id = this._cardId;
        return this.card;
    }

    getLikes (newLikeArr) {
      this._likeArr = newLikeArr;
    }

    setLikesCounter (responseResult) {
      this.card.querySelector('.card__like-counter').textContent = responseResult.likes.length;
    }

    // deleteCard (cardId) {
    //   card = document.getElementById(cardId);
    //   card.remove();
    //   card = null;
    // }

    _addRemoveLike() {
      if (this._hasUserLike(this._likeArr)) {
        this._removeLike(this._cardId);
        this.card.querySelector('.card__like-btn').classList.remove('card__like-btn_active');
      }  else {
        this._addLike(this._cardId);
        this.card.querySelector('.card__like-btn').classList.add('card__like-btn_active');
      }
    }
}

export { Card };
