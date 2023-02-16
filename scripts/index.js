let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-icon');
let userName = document.querySelector('#userName');
let userOccupation = document.querySelector('#userOccupation');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#userNameInput');
let occupationInput = document.querySelector('#userOccupationInput');
//* Открытие едит попапа
function openEditPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  occupationInput.value = userOccupation.textContent;
}
editButton.addEventListener('click', openEditPopup);
//* Закрытие едит попапа
function closeEditPopup() {
  popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closeEditPopup);
//* Изменение имени и статуса пользователя через формы
function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userOccupation.textContent = occupationInput.value;
  closeEditPopup();
}
formElement.addEventListener('submit', handleFormSubmit);
