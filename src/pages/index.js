import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import {FormValidator} from '../components/FormValidator.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Api } from '../components/Api.js';
import {
  addButton, 
  editButton, 
  userName, 
  userOccupation, 
  nameInput, 
  occupationInput, 
  cardImageInput, 
  cardNameInput, 
  addForm, 
  editForm, 
  imagePopup, 
  descriptionCardPopup, 
  imageCardPopup, 
  validationConfig,
  avatar,
  buttonEditAvatar} from '../utils/constants.js'
  import './index.css';
import { PopupWithConfirm } from '../components/PopupWithConfirm.js';

const handleCardClick = function (name, image) {
  popupWithImage.open(name, image);
}

const createCard = (cardData) => {
  const card = new Card(
    cardData,
     '#elementTemplate',
      handleCardClick,
       profileInfo.id, 
       handleDeleteCardClick,
       handleLikeCardClick);
  return card.generateCard();
}


//попап изменения информации юзера
  const popupUser = new PopupWithForm({
    popupSelector: '.popup_profile',
    handleFormSubmit: handleSubmitProfileForm,
  });
//попап просмотра изображения
export const popupWithImage = new PopupWithImage('.popup_image');
// попап добавления карточки
const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_cards',
  handleFormSubmit: handleSubmitAddCardForm
})

const profileInfo = new UserInfo(userName, userOccupation, avatar);
//открытие попапа изменения информации о юзере и наполнение полей
editButton.addEventListener('click', () => {
  popupUser.open();
  const {name, occupation} = profileInfo.getUserInfo();
  nameInput.value = name;
  occupationInput.value = occupation;
  editFormValidator.resetValidation();
} 
);

addButton.addEventListener('click', () => {
  popupAddCard.open();
  addForm.reset();
  addFormValidator.resetValidation();
});

const cardsList = new Section({
  items: [],
  renderer: (data) => {
    cardsList.additem(createCard(data))
  }
}, '.elements')
const addFormValidator =  new FormValidator(validationConfig, addForm);
const editFormValidator =  new FormValidator(validationConfig, editForm);

popupUser.setEventListeners();
popupWithImage.setEventListeners();
popupAddCard.setEventListeners(); 
cardsList.renderItems();
editFormValidator.enableValidation();
addFormValidator.enableValidation();


const api = new Api({
  baseLink: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: 'c98a00a2-a85b-402f-9bf1-d69533bde120',
    "content-type": "application/json"
  }
});
//получение данных с сервера
const getUserInfoFromServer = api.getUserInfo();
const getCardsFromServer = api.getInitialCards();

Promise.all([getUserInfoFromServer, getCardsFromServer]).then(([userData, initialCards]) => {
  profileInfo.setUserInfo(userData);
  profileInfo.setUserAvatar(userData.avatar)
  initialCards.forEach((card) => {
    cardsList.additem(createCard(card)
    )
  })
}).catch((err) => console.error(`Ошибка загрузки данных: ${err}`))
const popupAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handleFormSubmit: () => {
  }
})
buttonEditAvatar.addEventListener('click',() =>  popupAvatar.open())
popupAvatar.setEventListeners();
// 
const popupConfirm = new PopupWithConfirm('.popup_confirm', handleSubmitDeleteForm)

function handleSubmitDeleteForm(card){
  api.deleteCard(card._id)
  .then(() => {
    card.deleteCard();
    popupConfirm.close();
  })
  .catch((err) => console.error(`Ошибка: ${err}`))
}

function handleDeleteCardClick(card){
  popupConfirm.open();
  popupConfirm.changeHandleSubmitForm(() => {
    handleSubmitDeleteForm(card)
  })
}


popupConfirm.setEventListeners();

function handleSubmitAddCardForm(data){
  const cardData = {
    name: cardNameInput.value,
    link: cardImageInput.value}
    api.createCard(cardData)
    .then((card) => cardsList.additem(createCard(card)))
    popupAddCard.close()
  };

  function handleSubmitProfileForm(data){
    api.updateUserInfo({name: nameInput.value, about: occupationInput.value})
    .then((userData) => {
      profileInfo.setUserInfo(userData);
      popupUser.close()
    })
  }

  function handleLikeCardClick(card){
    if(card.isLiked()){
      api.deleteLike(card._id)
      .then((data) => {
        card.addLikes(data.likes);
        card.removeLikes()
      })
      .catch((err) => {console.error(`Ошибка: ${err}`)})
    } else {
      api.likeCard(card._id)
      .then((data) => {
        card.addLikes(data.likes);
        card.putLike();
      })
      .catch((err) => {console.error(`Ошибка: ${err}`)})
    }
  }