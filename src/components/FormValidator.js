export class FormValidator {
    constructor(config, formElement){
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._errorClassTemplate = config.errorClassTemplate;
        this._activeErrorClass = config.activeErrorClass;
        this._activeErrorInputClass = config.activeErrorInputClass;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveSubmitButtonClass = config.inactiveSubmitButtonClass;
        this._formElement = formElement;
        this._inputList = this._formElement.querySelectorAll(this._inputSelector);
        this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    }

    _enableButton(){
        this._submitButton.classList.remove(this._inactiveSubmitButtonClass);
        this._submitButton.disabled = false;
    };

    _disableButton(){
        this._submitButton.classList.add(this._inactiveSubmitButtonClass);
        this._submitButton.disabled = true;
    };

    _hasInvalidInput(){
        return Array.from(this._inputList).some((input) => !input.validity.valid);
    }

    _toggleButtonState(){
        if(!this._hasInvalidInput()){
            this._enableButton();
        }
        else{
            this._disableButton();
        }
    }

    _hideInputError(errorTextElement, input){
        errorTextElement.classList.remove(this._activeErrorClass);
        input.classList.remove(this._activeErrorInputClass);
    }

    _showInputError(errorTextElement, input){
        errorTextElement.textContent =  input.validationMessage;
        errorTextElement.classList.add(this._activeErrorClass);
        input.classList.add(this._activeErrorInputClass);
    }

    _checkInputValidity(input, errorTextElement){
        if(!input.validity.valid){
            this._showInputError(errorTextElement, input);
        }
        else{
            this._hideInputError(errorTextElement, input);
        }
       }

    _setEventListeners(){
        this._inputList.forEach((input) => {
            const errorTextElement = document.querySelector(`${this._errorClassTemplate}${input.name}`);
            this._hideInputError(errorTextElement, input);
            input.addEventListener('input', (evt) => {
                this._checkInputValidity(input, errorTextElement);
                this._toggleButtonState();
            });
         });
    }

    enableValidation(){
            this._toggleButtonState();
            this._setEventListeners()
        }

    resetValidation() {
            this._inputList.forEach((input) => {
                const errorTextElement = document.querySelector(`${this._errorClassTemplate}${input.name}`);
              this._hideInputError(errorTextElement, input)
            })
            this._toggleButtonState()
        } 
    }

