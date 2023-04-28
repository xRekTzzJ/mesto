import {Popup} from '../components/Popup.js'
export class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector)
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupDescription = this._popup.querySelector('.popup__description');
    }
    open(name, image){
        this._popupImage.src = image;
        this._popupImage.alt = name;
        this._popupDescription.textContent = name;

        super.open();
    }
}