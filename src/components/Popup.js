export class Popup{
    constructor(popupSelector){
        this._popupSelector = popupSelector;
    }
    _handleCloseByEsc(evt){
        if (evt.key === 'Escape'){
            this._popupSelector = document.querySelector('.popup_opened');
            close()
          }
    }
    open(){
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleCloseByEsc());
    }
    close(){
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleCloseByEsc());
    }
}