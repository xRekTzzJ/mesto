let editPopup = document.querySelector('#editPopup');
let addPopup = document.querySelector('#addPopup')
let addButton = document.querySelector('#addButton');
let editButton = document.querySelector('.profile__edit-button');
let editPopupcloseButton = document.querySelector('#editPopupCloseButton');
const addPopupCloseButton = document.querySelector('#addPopupCloseButton')
let userName = document.querySelector('#userName');
let userOccupation = document.querySelector('#userOccupation');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#userNameInput');
let occupationInput = document.querySelector('#userOccupationInput');
const elements = document.querySelector('.elements')
//* Контент карточек
const initialElements = [
  {
    name: 'Архыз',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 
initialElements.forEach(function(element){
  const elementTemplate = document.getElementById('elementTemplate').content.cloneNode(true)
  const elementTitle = elementTemplate.querySelector('.element__title');
  const elementImage = elementTemplate.querySelector('.element__image');
  elementTitle.textContent = element.name;
  elementImage.setAttribute('src', element.image);
  elements.append(elementTemplate);
})
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
editPopupcloseButton.addEventListener('click', closeEditPopup);
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
};
addButton.addEventListener('click', openAddPopup);
//*Закрытие попапа добавления карточек
function closeAddPopup() {
  addPopup.classList.remove('popup_opened');
}
addPopupCloseButton.addEventListener('click', closeAddPopup);
//*Добавление карточки