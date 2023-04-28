(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._name=e.name,this._image=e.image,this._cardTemplateSelector=n,this._handleCardClick=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._handleCardLike()})),this._wasteBucketButton.addEventListener("click",(function(){t._handleDeleteCard()})),this._cardPicture.addEventListener("click",(function(){t._handleCardClick(t._name,t._image)}))}},{key:"_handleCardLike",value:function(){this._likeButton.classList.toggle("element__like_active")}},{key:"_handleDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardPicture=this._element.querySelector(".element__image"),this._cardPicture.src=this._image,this._cardPicture.alt=this._name,this._cardName=this._element.querySelector(".element__title"),this._cardName.textContent=this._name,this._likeButton=this._element.querySelector(".element__like"),this._wasteBucketButton=this._element.querySelector(".element__trash"),this._setEventListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=o,this._renderedItems=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._renderedItems.forEach((function(e){t._renderer(e)}))}},{key:"additem",value:function(t){this._container.prepend(t)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._errorClassTemplate=e.errorClassTemplate,this._activeErrorClass=e.activeErrorClass,this._activeErrorInputClass=e.activeErrorInputClass,this._submitButtonSelector=e.submitButtonSelector,this._inactiveSubmitButtonClass=e.inactiveSubmitButtonClass,this._formElement=n,this._inputList=this._formElement.querySelectorAll(this._inputSelector),this._submitButton=this._formElement.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_enableButton",value:function(){this._submitButton.classList.remove(this._inactiveSubmitButtonClass),this._submitButton.disabled=!1}},{key:"_disableButton",value:function(){this._submitButton.classList.add(this._inactiveSubmitButtonClass),this._submitButton.disabled=!0}},{key:"_hasInvalidInput",value:function(){return Array.from(this._inputList).some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"_hideInputError",value:function(t,e){t.classList.remove(this._activeErrorClass),e.classList.remove(this._activeErrorInputClass)}},{key:"_showInputError",value:function(t,e){t.textContent=e.validationMessage,t.classList.add(this._activeErrorClass),e.classList.add(this._activeErrorInputClass)}},{key:"_checkInputValidity",value:function(t,e){t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){var n=document.querySelector("".concat(t._errorClassTemplate).concat(e.name));t._hideInputError(n,e),e.addEventListener("input",(function(r){t._checkInputValidity(e,n),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._toggleButtonState(),this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){var n=document.querySelector("".concat(t._errorClassTemplate).concat(e.name));t._hideInputError(n,e)})),this._toggleButtonState()}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close-icon"),this._handleCloseByEsc=this._handleCloseByEsc.bind(this),this._hidenOverlay=this._popup.querySelector(".popup__hide-overlay")}var e,n;return e=t,(n=[{key:"_handleCloseByEsc",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleCloseByEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleCloseByEsc)}},{key:"setEventListeners",value:function(){var t=this;this._popupCloseButton.addEventListener("click",(function(){return t.close()})),this._hidenOverlay.addEventListener("click",(function(){return t.close()}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},m.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(r);if(o){var n=h(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupDescription=e._popup.querySelector(".popup__description"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupImage.src=e,this._popupImage.alt=t,this._popupDescription.textContent=t,m(h(u.prototype),"open",this).call(this)}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var S=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e,this._userOccupation=n}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,occupation:this._userOccupation.textContent}}},{key:"setUserInfo",value:function(t,e){this._name.textContent=t,this._userOccupation.textContent=e}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},E.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._handleFormSubmit=r,e._form=e._popup.querySelector(".popup__form"),e._inputList=e._popup.querySelectorAll(".popup__input"),e}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputsValues={},this._inputList.forEach((function(e){t._inputsValues[e.name]=e.value})),this._inputsValues}},{key:"setEventListeners",value:function(){var t=this;E(j(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.close()}))}},{key:"close",value:function(){this._form.reset(),E(j(u.prototype),"close",this).call(this)}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p),C=document.querySelector("#addButton"),P=document.querySelector(".profile__edit-button"),B=document.querySelector("#userName"),L=document.querySelector("#userOccupation"),x=document.querySelector("#userNameInput"),q=document.querySelector("#userOccupationInput"),I=document.querySelector("#cardImageInput"),T=document.querySelector("#cardNameInput"),R=document.querySelector("#addForm"),D=document.querySelector("#editForm"),V=(document.querySelector(".popup_image"),document.querySelector(".popup__description"),document.querySelector(".popup__image"),{formSelector:".popup__form",inputSelector:".popup__input",errorClassTemplate:".popup__input-error_type_",activeErrorClass:"popup__input-error_active",activeErrorInputClass:"popup__input_error",submitButtonSelector:".popup__submit-button",inactiveSubmitButtonClass:"popup__submit-button_inactive"}),M=function(t,e){A.open(t,e)},H=function(t){return new n(t,"#elementTemplate",M).generateCard()},G=new O({popupSelector:".popup_profile",handleFormSubmit:function(t){var e=t.name,n=t.occupation;N.setUserInfo(e,n)}}),A=new d(".popup_image"),F=new O({popupSelector:".popup_cards",handleFormSubmit:function(){U.additem(H({name:T.value,image:I.value}))}}),N=new S(B,L);P.addEventListener("click",(function(){G.open();var t=N.getUserInfo(),e=t.name,n=t.occupation;x.value=e,q.value=n,Y.resetValidation()})),C.addEventListener("click",(function(){F.open(),R.reset(),W.resetValidation()}));var U=new i({items:[{name:"Санкт-Петербург",image:"https://images.unsplash.com/photo-1597533849860-5a04a21a7b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80"},{name:"Москва",image:"https://images.unsplash.com/photo-1541447271487-09612b3f49f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"},{name:"Иваново",image:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Калиниград",image:"https://images.unsplash.com/photo-1642106077494-4e4e776152c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"},{name:"Северобайкальск",image:"https://images.unsplash.com/photo-1587053362230-eb9a377641ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"},{name:"Байкал",image:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(t){U.additem(H(t))}},".elements"),W=new c(V,R),Y=new c(V,D);G.setEventListeners(),A.setEventListeners(),F.setEventListeners(),U.renderItems(),Y.enableValidation(),W.enableValidation()})();