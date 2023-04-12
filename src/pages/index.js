import {Card} from '../components/Card.js'
import {FormValidator} from '../components/FormValidator.js'
const editPopup = document.querySelector('#editPopup');
const addPopup = document.querySelector('#addPopup');
const addButton = document.querySelector('#addButton');
const editButton = document.querySelector('.profile__edit-button');
const buttonClosePopupProfile = document.querySelector('#editPopupCloseButton');
const buttonCloseAddPopup= document.querySelector('#addPopupCloseButton')
const userName = document.querySelector('#userName');
const userOccupation = document.querySelector('#userOccupation');
const nameInput = document.querySelector('#userNameInput');
const occupationInput = document.querySelector('#userOccupationInput');
const cardImageInput = document.querySelector('#cardImageInput')
const cardNameInput = document.querySelector('#cardNameInput');
const addForm = document.querySelector('#addForm');
const editForm = document.querySelector('#editForm')
const buttonCloseImagePopup= document.querySelector('#imagePopupCloseButton')
export const imagePopup = document.querySelector('.popup_image');
const overlayHiddenPopupAdd = document.querySelector('#hideOverlayAddPopup')
const overlayHiddenPopupimage = document.querySelector('#hideOverlayImagePopup')
const overlayHiddenPopupEdit = document.querySelector('#hideOverlayEditPopup')
//const buttonSubmitEditPopup = document.querySelector('#addSubmit')
//const buttonSubmitAddPopup = document.querySelector('#addCardSubmit')
const cardsContainer = document.querySelector('.elements');
export const descriptionCardPopup = document.querySelector('.popup__description');
export const imageCardPopup = document.querySelector('.popup__image');
export function openPopup(popupName){
  popupName.classList.add('popup_opened');
  document.addEventListener('keydown', handleCloseByEsc);
}

function closePopup(popupName){
  popupName.classList.remove('popup_opened')
  document.removeEventListener('keydown', handleCloseByEsc);
}
function closeOverlay (hideOverlayName,nameOverlay){
  hideOverlayName.addEventListener('click', function(){
    closePopup(nameOverlay)
})}
function handleCloseByEsc(evt){
    if (evt.key === 'Escape'){
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
  }

editButton.addEventListener('click', function openEditPopup(){
  openPopup(editPopup)
  nameInput.value = userName.textContent;
  occupationInput.value = userOccupation.textContent;
  editFormValidator.resetValidation();
});
addButton.addEventListener('click', function openAddPopup(){
  openPopup(addPopup)
  addForm.reset();
  addFormValidator.resetValidation();
});

//* Закрытие едит попапа
buttonClosePopupProfile.addEventListener('click', function closeEditPopup() {
  closePopup(editPopup)
});
closeOverlay(overlayHiddenPopupEdit, editPopup);
//* Изменение имени и статуса пользователя через формы
function handleFormSubmitEditPopup(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userOccupation.textContent = occupationInput.value;
  closePopup(editPopup);
}
editForm.addEventListener('submit', handleFormSubmitEditPopup);
//*Закрытие попапа добавления карточек
buttonCloseAddPopup.addEventListener('click', function() {
  closePopup(addPopup)
});
closeOverlay(overlayHiddenPopupAdd, addPopup);
//* Закрытие попапа просмотра фотографии
buttonCloseImagePopup.addEventListener('click', function(){
  closePopup(imagePopup)
})
closeOverlay(overlayHiddenPopupimage, imagePopup);


const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClassTemplate: '.popup__input-error_type_',
  activeErrorClass: 'popup__input-error_active',
  activeErrorInputClass: 'popup__input_error',
  submitButtonSelector: '.popup__submit-button',
  inactiveSubmitButtonClass: 'popup__submit-button_inactive',
}


  const addFormValidator =  new FormValidator(validationConfig, addForm);
  addFormValidator.enableValidation();
  
  const editFormValidator =  new FormValidator(validationConfig, editForm);
  editFormValidator.enableValidation();



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


const createElement = (elementType) => {
  const card = new Card(elementType, '#elementTemplate');
  const item = card.generateCard();
  return item;

}

const renderCard = (item) => {
  cardsContainer.prepend(item);
}

data.forEach((cardElement) => {
  const cardItem = createElement(cardElement);
  renderCard(cardItem);
})

//* Добавления карточки по нажатию кнопки 'Сохранить'
function handleAddSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: cardNameInput.value,
    image: cardImageInput.value,
  }
  const cardItem = createElement(newCard);
  renderCard(cardItem);
  closePopup(addPopup)
}
addForm.addEventListener('submit', handleAddSubmit);