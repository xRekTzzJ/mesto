import {open} from './index.js'
const data = [
    {
      name: 'Санкт-Петербург',
      image: 'https://images.unsplash.com/photo-1597533849860-5a04a21a7b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80'
    },
    {
      name: 'Москва',
      image: 'https://images.unsplash.com/photo-1541447271487-09612b3f49f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
    },
    {
      name: 'Иваново',
      image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Калиниград',
      image: 'https://images.unsplash.com/photo-1642106077494-4e4e776152c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
    },
    {
      name: 'Северобайкальск',
      image: 'https://images.unsplash.com/photo-1587053362230-eb9a377641ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80'
    },
    {
      name: 'Байкал',
      image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
  
export class Card {
    constructor(data, cardTemplateSelector){
        this._name = data.name;
        this._image = data.image;
        this._cardTemplateSelector =  cardTemplateSelector;
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
            this._handeOpenPopupCardImage();
        })
    }

    _handleCardLike(){
        this._likeButton.classList.toggle('element__like_active')
    }

    _handleDeleteCard(){
        this._element.remove();
    }

    _handeOpenPopupCardImage(){
      const descriptionCardPopup = document.querySelector('.popup__description');
      const imageCardPopup = document.querySelector('.popup__image');
      const imagePopup = document.querySelector('.popup_image');
      imageCardPopup.src = this._image;
      imageCardPopup.alt = this._name;
      descriptionCardPopup.textContent = this._name;
      open(imagePopup);
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

data.forEach((cardElement) => {
  const card = new Card(cardElement, '#elementTemplate');
  const item = card.generateCard();
  document.querySelector('.elements').prepend(item);
  
})
