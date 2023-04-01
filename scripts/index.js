import {Card} from './Card.js'

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
const imagePopup = document.querySelector('.popup_image');
const overlayHiddenPopupAdd = document.querySelector('#hideOverlayAddPopup')
const overlayHiddenPopupimage = document.querySelector('#hideOverlayImagePopup')
const overlayHiddenPopupEdit = document.querySelector('#hideOverlayEditPopup')
const buttonSubmitEditPopup = document.querySelector('#addSubmit')
const buttonSubmitAddPopup = document.querySelector('#addCardSubmit')
export function open(popupName){
  popupName.classList.add('popup_opened');
  document.addEventListener('keydown', closingByEsc);
}

function close(popupName){
  popupName.classList.remove('popup_opened')
  document.removeEventListener('keydown', closingByEsc);
}
function closeOverlay (hideOverlayName,nameOverlay){
  hideOverlayName.addEventListener('click', function(){
  close(nameOverlay)
})}
function closingByEsc(evt){
    if (evt.key === 'Escape'){
      const openedPopup = document.querySelector('.popup_opened');
      close(openedPopup);
    }
  }

editButton.addEventListener('click', function openEditPopup(){
  open(editPopup)
  nameInput.value = userName.textContent;
  occupationInput.value = userOccupation.textContent;
  enableButton(buttonSubmitEditPopup, validationConfig)
});
addButton.addEventListener('click', function openAddPopup(){
  open(addPopup)
  cardNameInput.value='';
  cardImageInput.value='';
  disableButton(buttonSubmitAddPopup, validationConfig)
});

//* Закрытие едит попапа
buttonClosePopupProfile.addEventListener('click', function closeEditPopup() {
  close(editPopup)
});
closeOverlay(overlayHiddenPopupEdit, editPopup);
//* Изменение имени и статуса пользователя через формы
function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userOccupation.textContent = occupationInput.value;
  close(editPopup);
}
editForm.addEventListener('submit', handleFormSubmit);
//*Закрытие попапа добавления карточек
buttonCloseAddPopup.addEventListener('click', function() {
  close(addPopup)
});
closeOverlay(overlayHiddenPopupAdd, addPopup);
//* Добавления карточки по нажатию кнопки 'Сохранить'
function handleAddSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: cardNameInput.value,
    image: cardImageInput.value,
  }
  const card = new Card(newCard, '#elementTemplate');
  const item = card.generateCard();
  document.querySelector('.elements').prepend(item);
  close(addPopup)
}
addForm.addEventListener('submit', handleAddSubmit);
//* Закрытие попапа просмотра фотографии
buttonCloseImagePopup.addEventListener('click', function(){
  close(imagePopup)
})
closeOverlay(overlayHiddenPopupimage, imagePopup);
