import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import {FormValidator} from '../components/FormValidator.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Api } from '../components/Api.js';
import { PopupWithConfirm } from '../components/PopupWithConfirm.js';
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
  buttonEditAvatar,
  avatarForm,
  avatarInput} from '../utils/constants.js'
  import './index.css';
  import { data } from 'autoprefixer';

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
    cardsList.additem(createCard(card), false
    )
  })
}).catch((err) => console.error(`Ошибка загрузки данных: ${err}`))

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

// попап подтверждения удаления карточки
const popupConfirm = new PopupWithConfirm('.popup_confirm', handleSubmitDeleteForm)

// попап изменения аватара
const popupAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handleFormSubmit: handleSubmitAvatarForm
})
//данные о профиле из DOM
const profileInfo = new UserInfo(userName, userOccupation, avatar);

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

buttonEditAvatar.addEventListener('click',() =>  {
  popupAvatar.open();
  avatarFormValidator.resetValidation();})
popupAvatar.setEventListeners();


function handleSubmitDeleteForm(card){
  api.deleteCard(card._id)
  .then(() => {
    card.handleDeleteCard();
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

function handleSubmitAddCardForm(data){
  popupAddCard.changeButtonText('Сохранение...')
  const cardData = {
    name: data["new"],
    link: data["link"]}
    api.createCard(cardData)
    .then((card) => {
      cardsList.additem(createCard(card), true);
      popupAddCard.close()
    })
    .catch((err) => console.error(`Ошибка: ${err}`))
    .finally(() => {popupAddCard.changeButtonText('Сохранить')})
  };

  function handleSubmitProfileForm(data){
    popupUser.changeButtonText('Сохранение...')
    api.updateUserInfo({ name: data["name"], about: data["occupation"]})
    .then((userData) => {
      profileInfo.setUserInfo(userData);
      popupUser.close()
    })
    .catch((err) => {console.error(`Ошибка: ${err}`)})
    .finally(() => {popupUser.changeButtonText('Сохранить')})
  }

  function handleLikeCardClick(card){
    if(card.isLiked()){
      api.deleteLike(card._id)
      .then((data) => {
        card.addLikes(data.likes);
        card.removeLike()
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

  function handleSubmitAvatarForm(data){
    popupAvatar.changeButtonText('Сохранение...')
    api.editProfileAvatar({link: avatarInput.value})
    .then((data) => {
      profileInfo.setUserAvatar(data.avatar);
      popupAvatar.close()
    })
    .catch((err) => {console.error(`Ошибка: ${err}`)})
    .finally(() => {popupAvatar.changeButtonText('Сохранить')})
  }

  const addFormValidator =  new FormValidator(validationConfig, addForm);
  const avatarFormValidator =  new FormValidator(validationConfig, avatarForm);
  const editFormValidator =  new FormValidator(validationConfig, editForm);
  popupUser.setEventListeners();
  popupWithImage.setEventListeners();
  popupAddCard.setEventListeners(); 
  popupConfirm.setEventListeners();
  editFormValidator.enableValidation();
  addFormValidator.enableValidation();
  avatarFormValidator.enableValidation();
  cardsList.renderItems();