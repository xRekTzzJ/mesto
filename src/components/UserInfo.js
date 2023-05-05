import { Popup } from "./Popup.js";
export class UserInfo {
    constructor(profileNameSelector, profileOccupationSelector){
        this._name = profileNameSelector;
        this._userOccupation = profileOccupationSelector;
        //avatar selector
    }
    getUserInfo(){
        return {
            name: this._name.textContent,
            occupation: this._userOccupation.textContent,
        };
    }
    setUserInfo(userData) {
        this._id = userData._id;
        this._name.textContent = userData.name;
        this._userOccupation.textContent = userData.about;
    }
}