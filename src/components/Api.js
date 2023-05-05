export class Api {
    constructor(options){
        this._baseLink = options.baseLink;
        this._headers = options.headers;
    }
    _handleResponse(res){
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getUserInfo(){
        return fetch(`${this._baseLink}/users/me`, {
            headers: this._headers
        })
        .then(res => this._handleResponse(res))
    }

    getInitialCards(){
        const url = `${this._baseLink}/cards`;
        return fetch(url, {
            headers: this._headers
        }).then(this._handleResponse)
    }
    updateUserInfo(user){
        const url = `${this._baseLink}/users/me`;
        return fetch(url, {
            method: "PATH",
            headers: this._headers,
            body: JSON.stringify(user),
        }).then(this._handleResponse)
    }
    createCard(card){
        const url = `${this._baseLink}/cards`;
        return fetch(url, {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify(card),
        }).then(this._handleResponse)
    }
}