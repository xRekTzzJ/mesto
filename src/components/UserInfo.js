import { Popup } from "./Popup.js";
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