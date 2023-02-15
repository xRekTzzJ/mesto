let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-icon');
//* Открытие едит попапа
function openEditPopup() {
  popup.classList.add('popup_opened');
}
editButton.addEventListener('click', openEditPopup);
//* Закрытие едит попапа
function closeEditPopup() {
  popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closeEditPopup);
//* Изменение имени и статуса пользователя через формы
let userName = document.querySelector('#userName');
let userOccupation = document.querySelector('#userOccupation');
userName.textContent = 'Жак-Ив Кусто';
userOccupation.textContent = 'Исследователь морей';
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#userNameInput');
let OccupationInput = document.querySelector('#userOccupationInput');
nameInput.value = userName.textContent;
OccupationInput.value = userOccupation.textContent;
function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userOccupation.textContent = OccupationInput.value;
  closeEditPopup();
}
formElement.addEventListener('submit', handleFormSubmit);
