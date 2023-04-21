export class Popup{
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButton = this._popup.querySelector('.popup__close-icon');
        this._handleCloseByEsc = this._handleCloseByEsc.bind(this);
        this._hidenOverlay = this._popup.querySelector('.popup__hide-overlay');
    }
    _handleCloseByEsc(evt){
        if (evt.key === 'Escape'){
            this.close();
          }
    }
    open(){
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleCloseByEsc);
    }
    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleCloseByEsc);
    }
    setEventListeners(){
        this._popupCloseButton.addEventListener('click', () => this.close());
        this._hidenOverlay.addEventListener('click', () => this.close());
    }
}


export class PopupWithForm extends Popup{
    constructor({ popupSelector, handleFormSubmit }){
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
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


export class UserInfo {
    constructor(profileNameSelector, profileOccupationSelector){
        this._name = profileNameSelector;
        this._userOccupation = profileOccupationSelector;
    }
    getUserInfo(){
        return {
            name: this._name.textContent,
            occupation: this._userOccupation.textContent,
        };
    }
    setUserInfo(name, occupation) {
        this._name.textContent = name;
        this._userOccupation.textContent = occupation;
    }
}