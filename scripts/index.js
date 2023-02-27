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