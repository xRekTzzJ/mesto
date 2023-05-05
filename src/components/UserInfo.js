import { Popup } from "./Popup.js";
export class UserInfo {
    constructor(profileNameSelector, profileOccupationSelector, avatarSelector){
        this._name = profileNameSelector;
        this._userOccupation = profileOccupationSelector;
        this._avatar = avatarSelector
    }
    getUserInfo(){
        return {
            name: this._name.textContent,
            occupation: this._userOccupation.textContent,
            avatar: this._avatar.src
        };
    }
    setUserInfo(userData) {
        this.id = userData._id;
        this._name.textContent = userData.name;
        this._userOccupation.textContent = userData.about;
    }
    setUserAvatar(avatar) {
        this._avatar.src = avatar
    }
}