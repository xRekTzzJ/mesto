import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import {FormValidator} from '../components/FormValidator.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
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
  data, 
  validationConfig} from '../utils/constants.js'
//попап изменения информации 
const popupUser = new Popup('.popup_profile');
//попап просмотра изображения
export const popupWithImage = new PopupWithImage('.popup_image');
// попап добавления карточки
const popupAddCard = new Popup('.popup_cards');

const profileInfo = new UserInfo(userName, userOccupation);
//открытие попапа изменения информации о юзере и наполнение полей
editButton.addEventListener('click', () => {
  popupUser.open();
  const {name, occupation} = profileInfo.getUserInfo();
  nameInput.value = name;
  occupationInput.value = occupation;
  editFormValidator.resetValidation();
} 
);

const popupWithProfileForm = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleFormSubmit: ({ name, occupation }) => {
    profileInfo.setUserInfo(name, occupation);
  },
});

addButton.addEventListener('click', () => {
  popupAddCard.open();
  addForm.reset();
  addFormValidator.resetValidation();
});

const addCardFromAddPopup = new PopupWithForm({
  popupSelector: '.popup_cards',
  handleFormSubmit: (formValues) => {
    const card = new Card({name: cardNameInput.value, image: cardImageInput.value}, '#elementTemplate');
    addStartCard.additem(card.generateCard());
  }
})

const addStartCard = new Section({
  items: data,
  renderer: (data) => {
    const card = new Card(data, '#elementTemplate');
    addStartCard.additem(card.generateCard())
  }
}, '.elements')
const addFormValidator =  new FormValidator(validationConfig, addForm);
const editFormValidator =  new FormValidator(validationConfig, editForm);

popupUser.setEventListeners();
popupWithImage.setEventListeners();
popupAddCard.setEventListeners(); 
popupWithProfileForm.setEventListeners();
addCardFromAddPopup.setEventListeners();
addStartCard.renderItems();
editFormValidator.enableValidation();
addFormValidator.enableValidation();
