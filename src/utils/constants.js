export const addButton = document.querySelector('#addButton');
export const editButton = document.querySelector('.profile__edit-button');
export const userName = document.querySelector('#userName');
export const userOccupation = document.querySelector('#userOccupation');
export const nameInput = document.querySelector('#userNameInput');
export const occupationInput = document.querySelector('#userOccupationInput');
export const cardImageInput = document.querySelector('#cardImageInput')
export const cardNameInput = document.querySelector('#cardNameInput');
export const addForm = document.querySelector('#addForm');
export const editForm = document.querySelector('#editForm')
export const imagePopup = document.querySelector('.popup_image');
export const descriptionCardPopup = document.querySelector('.popup__description');
export const imageCardPopup = document.querySelector('.popup__image');
export const data = [
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
  export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorClassTemplate: '.popup__input-error_type_',
    activeErrorClass: 'popup__input-error_active',
    activeErrorInputClass: 'popup__input_error',
    submitButtonSelector: '.popup__submit-button',
    inactiveSubmitButtonClass: 'popup__submit-button_inactive',
  }