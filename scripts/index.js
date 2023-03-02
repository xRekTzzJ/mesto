const editPopup = document.querySelector('#editPopup');
let addPopup = document.querySelector('#addPopup')
let addButton = document.querySelector('#addButton');
let editButton = document.querySelector('.profile__edit-button');
let editPopupСloseButton = document.querySelector('#editPopupCloseButton');
const addPopupCloseButton = document.querySelector('#addPopupCloseButton')
let userName = document.querySelector('#userName');
let userOccupation = document.querySelector('#userOccupation');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#userNameInput');
let occupationInput = document.querySelector('#userOccupationInput');
const elements = document.querySelector('.elements')
const cardImageInput = document.querySelector('#cardImageInput')
const cardNameInput = document.querySelector('#cardNameInput');
const addCardSubmit = document.querySelector('#addCardSubmit')
let addForm = document.querySelector('#addForm');
const imagePopupCloseButton = document.querySelector('#imagePopupCloseButton')
const imagePopup = document.querySelector('.popup_image');

//* Контент карточек
const initialElements = [
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
function createElement(element){
  const elementTemplate = document.getElementById('elementTemplate').content.cloneNode(true)
  const elementTitle = elementTemplate.querySelector('.element__title');
  const elementImage = elementTemplate.querySelector('.element__image');
  elementTitle.textContent = element.name;
  elementImage.setAttribute('src', element.image);
  elementImage.addEventListener('click', function(){
    const imageForImagePopup = document.querySelector('.popup__image')
    imageForImagePopup.setAttribute('src', element.image)
    const titleForImagePopup = document.querySelector('.popup__description')
    titleForImagePopup.textContent = element.name
    imagePopup.classList.add('popup_opened')
  })
  const deleteButton = elementTemplate.querySelector('.element__trash')
  const likeButton = elementTemplate.querySelector('.element__like')
  likeButton.addEventListener('click', handleLikeButtonClicj)
  deleteButton.addEventListener('click', handleDeleteButtonClick) 
  elements.prepend(elementTemplate);
}
initialElements.forEach(createElement);
//* Открытие едит попапа
function openEditPopup() {
  editPopup.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  occupationInput.value = userOccupation.textContent;
}
editButton.addEventListener('click', openEditPopup);
//* Закрытие едит попапа
function closeEditPopup() {
  editPopup.classList.remove('popup_opened');
}
editPopupСloseButton.addEventListener('click', closeEditPopup);
//* Изменение имени и статуса пользователя через формы
function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userOccupation.textContent = occupationInput.value;
  closeEditPopup();
}
formElement.addEventListener('submit', handleFormSubmit);
//*Открытия попапа добавления карточек
function openAddPopup() {
  addPopup.classList.add('popup_opened');
  cardNameInput.value='';
  cardImageInput.value='';
};
addButton.addEventListener('click', openAddPopup);
//*Закрытие попапа добавления карточек
function closeAddPopup() {
  addPopup.classList.remove('popup_opened');
}
addPopupCloseButton.addEventListener('click', closeAddPopup);
//* Добавления карточки по нажатию кнопки 'Сохранить'
function handleAddSubmit(evt) {
  evt.preventDefault();
  const addNewCard = {
    name: cardNameInput.value,
    image: cardImageInput.value,
  }
  createElement(addNewCard);
  closeAddPopup();
}
addForm.addEventListener('submit', handleAddSubmit);
//*Удалить карточку
function handleDeleteButtonClick(evt){
  const deleteButton = evt.target
  const element = deleteButton.closest('.element')
  element.remove();
}
//* Поставить лайк
function handleLikeButtonClicj(evt){
  const likeButton = evt.target
  const element = likeButton.closest('.element')
  likeButton.classList.toggle('element__like_active')
}
//* Закрытие попапа просмотра фотографии
imagePopupCloseButton.addEventListener('click', function(){
  imagePopup.classList.remove('popup_opened')
})