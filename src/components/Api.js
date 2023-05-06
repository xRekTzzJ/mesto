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
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: user.name,
                about: user.about
              }),
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
    deleteCard(cardId){
        const url = `${this._baseLink}/cards/${cardId}`;
        return fetch(url, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._handleResponse)
    }
    likeCard(id){
        const url = `${this._baseLink}/cards/${id}/likes`;
        return fetch(url, {
            method: "PUT",
            headers: this._headers,
        }).then(this._handleResponse)
    }
    deleteLike(id){
        const url = `${this._baseLink}/cards/${id}/likes`;
        return fetch(url, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._handleResponse)
    }
    editProfileAvatar({link}){
        const url = `${this._baseLink}/users/me/avatar`;
        return fetch(url, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: link
              }),
        }).then(this._handleResponse)
    }
}