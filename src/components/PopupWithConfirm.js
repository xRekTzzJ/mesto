import { Popup } from "./Popup.js";

export class PopupWithConfirm extends Popup{
    constructor(popupSelector, handleSubmitForm){
        super(popupSelector)
        this._form = this._popup.querySelector('.popup__form_confirm');
        this._handleSubmitForm = handleSubmitForm;
    }
      changeHandleSubmitForm(newHandleSubmitForm) {
        this._handleSubmitForm = newHandleSubmitForm;
  }

    setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm();
    });
  }
}