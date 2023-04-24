export class Card {
    constructor(data, cardTemplateSelector, handleCardClick){
        this._data = data;
        this._name = data.name;
        this._image = data.image;
        this._cardTemplateSelector =  cardTemplateSelector;
        this._handleCardClick = handleCardClick;
    }
    _getTemplate(){
            const cardElement = document
            .querySelector(this._cardTemplateSelector)
            .content.querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }
    
    _setEventListeners(){
        this._likeButton.addEventListener('click', () => {
            this._handleCardLike();
        })
        this._wasteBucketButton.addEventListener('click', () => {
            this._handleDeleteCard();
        })
        this._cardPicture.addEventListener('click', () => {
            this._handleCardClick(this._name, this._image);
        })
    }

    _handleCardLike(){
        this._likeButton.classList.toggle('element__like_active')
    }

    _handleDeleteCard(){
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

        this._setEventListeners();

        return this._element;
    }
}