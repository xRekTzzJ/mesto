export class Card {
    constructor(data, cardTemplateSelector, handleCardClick, profileId, handleDeleteCardClick, handleLikeCardClick){
        this._data = data;
        this._likes = data.likes;
        this._name = data.name;
        this._image = data.link;
        this._cardTemplateSelector =  cardTemplateSelector;
        this._handleCardClick = handleCardClick;
        this._id = data._id;
        this._profileId = profileId;
        this._handleDeleteCard = handleDeleteCardClick;
        this._handleCardLike = handleLikeCardClick;
        this._owner = data.owner;
    }
    _getTemplate(){
            const cardElement = document
            .querySelector(this._cardTemplateSelector)
            .content.querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }
    isLiked() {
        return this._likes.some(userInfo => userInfo._id === this._profileId);
      }
    
    _updateLikes() {
        this.isLiked() ? this.putLike() : this.removeLike();
      }

    addLikes(newLikes) {
        this._likes = newLikes;
        this._likesCounter.textContent = this._likes.length;
      }
      
    removeLike() {
        this._likeButton.classList.remove('element__like_active');
      }

    putLike() {
        this._likeButton.classList.add('element__like_active');
      }

    _setEventListeners(){
        this._likeButton.addEventListener('click', () => {
            this._handleCardLike(this);
        })
        this._wasteBucketButton.addEventListener('click', () => {
            this._handleDeleteCard(this);
        })
        this._cardPicture.addEventListener('click', () => {
            this._handleCardClick(this._name, this._image);
        })
    }

    _checkOwnerCard() {
        if (this._owner._id !== this._profileId) {
          this._wasteBucketButton.remove();
        }
      }

    handleDeleteCard(){
        this._element.remove();
        this._element = null;
    }

    generateCard(){
        this._element = this._getTemplate();
        this._cardPicture =  this._element.querySelector('.element__image');
        this._cardPicture.src = this._image;
        this._cardPicture.alt = this._name;
        this._cardName =  this._element.querySelector('.element__title');
        this._cardName.textContent =  this._name;
        this._likeButton = this._element.querySelector('.element__like');
        this._wasteBucketButton = this._element.querySelector('.element__trash');
        this._likesCounter = this._element.querySelector('.element__like-number');

        this._setEventListeners();
        this.addLikes(this._likes);
        this._updateLikes();
        this._checkOwnerCard()

        return this._element;
    }
}