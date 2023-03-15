const editPopup = document.querySelector('#editPopup');
const addPopup = document.querySelector('#addPopup');
const addButton = document.querySelector('#addButton');
const editButton = document.querySelector('.profile__edit-button');
const buttonClosePopupProfile = document.querySelector('#editPopupCloseButton');//* editPopupСloseButton
const buttonCloseAddPopup= document.querySelector('#addPopupCloseButton')// *addPopupCloseButton
const userName = document.querySelector('#userName');
const userOccupation = document.querySelector('#userOccupation');
const nameInput = document.querySelector('#userNameInput');
const occupationInput = document.querySelector('#userOccupationInput');
const elements = document.querySelector('.elements')
const cardImageInput = document.querySelector('#cardImageInput')
const cardNameInput = document.querySelector('#cardNameInput');
const addForm = document.querySelector('#addForm');
const editForm = document.querySelector('#editForm')
const buttonCloseImagePopup= document.querySelector('#imagePopupCloseButton')//* imagePopupCloseButton
const imagePopup = document.querySelector('.popup_image');
const descriptionCardPopup = document.querySelector('.popup__description')
const imageCardPopup = document.querySelector('.popup__image')
const overlayHiddenPopupAdd = document.querySelector('#hideOverlayAddPopup')
const overlayHiddenPopupimage = document.querySelector('#hideOverlayImagePopup')
const overlayHiddenPopupEdit = document.querySelector('#hideOverlayEditPopup')
function open(popupName){
  popupName.classList.add('popup_opened');
  //добавить слушатель 
  document.addEventListener('keydown', closingByEsc);
}
function close(popupName){
  popupName.classList.remove('popup_opened')
  //удалить слушатель
  document.removeEventListener('keydown', closingByEsc);
}
//*Закрытие попапа по клику на оверлей
function closeOverlay (hideOverlayName,nameOverlay){
  hideOverlayName.addEventListener('click', function(){
  close(nameOverlay)
})}
//*  Закрытие попапа на клавишу ESC
function closingByEsc(evt){
    if (evt.key === 'Escape'){
      const openedPopup = document.querySelector('.popup_opened');
      close(openedPopup);
    }
  }
//функция создания карточки и установки слушателей
function createElement(element){
  const elementTemplate = document.getElementById('elementTemplate').content.firstElementChild.cloneNode(true)
  const elementTitle = elementTemplate.querySelector('.element__title');
  const elementImage = elementTemplate.querySelector('.element__image');
  elementTitle.textContent = element.name;
  elementImage.setAttribute('src', element.image);
  elementImage.setAttribute('alt', 'изображение карточки');
  elementImage.addEventListener('click', function(){
  imageCardPopup.setAttribute('src', element.image);
  imageCardPopup.setAttribute('alt', 'изображение карточки');
  descriptionCardPopup.textContent = element.name
  open(imagePopup)
  })
  const deleteButton = elementTemplate.querySelector('.element__trash')
  const likeButton = elementTemplate.querySelector('.element__like')
  likeButton.addEventListener('click', handleLikeButtonClick)
  deleteButton.addEventListener('click', handleDeleteButtonClick) 
  return elementTemplate;
}
//функция добавления карточки в разметку
function addCard(element){
  elements.prepend(createElement(element));
}
//добавить все карточки в разметку
initialElements.forEach(addCard);

editButton.addEventListener('click', function openEditPopup(){
  open(editPopup)
  nameInput.value = userName.textContent;
  occupationInput.value = userOccupation.textContent;
  enableValidation(validationConfig);
});
addButton.addEventListener('click', function openAddPopup(){
  open(addPopup)
  cardNameInput.value='';
  cardImageInput.value='';
  enableValidation(validationConfig);
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
  addCard(newCard);
  close(addPopup)
}
addForm.addEventListener('submit', handleAddSubmit);
//*Удалить карточку
function handleDeleteButtonClick(evt){
  const deleteButton = evt.target
  const element = deleteButton.closest('.element')
  element.remove();
}
//* Поставить лайк
function handleLikeButtonClick(evt){
  const likeButton = evt.target
  const element = likeButton.closest('.element')
  likeButton.classList.toggle('element__like_active')
}
//* Закрытие попапа просмотра фотографии
buttonCloseImagePopup.addEventListener('click', function(){
  close(imagePopup)
})
closeOverlay(overlayHiddenPopupimage, imagePopup);
