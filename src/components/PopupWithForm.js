import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup{
    constructor({ popupSelector, handleFormSubmit }){
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form')
    this._inputList = this._popup.querySelectorAll('.popup__input');

}
    _getInputValues(){
        this._inputsValues = {};
    this._inputList.forEach((input) => {
        this._inputsValues[input.name] = input.value;
    });

    
    return this._inputsValues;

}
    changeButtonText(text){
        this._form.querySelector('.popup__submit-button').textContent = text;
    }

    setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
        this.close();
    });
}
    close(){
    this._form.reset();
    super.close();
}
}