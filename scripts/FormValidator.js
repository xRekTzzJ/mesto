export class FormValidator {
    constructor(config){
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._errorClassTemplate = config.errorClassTemplate;
        this._activeErrorClass = config.activeErrorClass;
        this._activeErrorInputClass = config.activeErrorInputClass;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveSubmitButtonClass = config.inactiveSubmitButtonClass;
    }


    _enableButton(submitButton){
        submitButton.classList.remove(this._inactiveSubmitButtonClass);
        submitButton.disabled = false;
    };

    _disableButton(submitButton){
        submitButton.classList.add(this._inactiveSubmitButtonClass);
        submitButton.disabled = true;
    };

    _hasInvalidInput(inputList){
        return Array.from(inputList).some((input) => !input.validity.valid);
    }

    _toggleButtonState(submitButton, inputList){
        if(!this._hasInvalidInput(inputList)){
            this._enableButton(submitButton);
        }
        else{
            this._disableButton(submitButton);
        }
    }

    _hideInputError(errorTextElement, input){
        errorTextElement.classList.remove(this._activeErrorClass);
        input.classList.remove(this._activeErrorInputClass);
    }

    _showInputError(errorTextElement, validationMessage, input){
        errorTextElement.textContent = validationMessage;
        errorTextElement.classList.add(this._activeErrorClass);
        input.classList.add(this._activeErrorInputClass);
    }

    _checkInputValidity(input, errorTextElement){
        if(!input.validity.valid){
            this._showInputError(errorTextElement, input.validationMessage, input);
        }
        else{
            this._hideInputError(errorTextElement, input);
        }
       }

    _setEventListeners(form, inputList, submitButton){
        inputList.forEach((input) => {
            const errorTextElement = document.querySelector(`${this._errorClassTemplate}${input.name}`);
            this._hideInputError(errorTextElement, input);
            input.addEventListener('input', (evt) => {
                this._checkInputValidity(input, errorTextElement);
                this._toggleButtonState(submitButton, inputList);
            });
         });
    }

    

    enableValidation(){
        const formList = Array.from(document.querySelectorAll(this._formSelector));
        formList.forEach((form) => {
            const inputList = form.querySelectorAll(this._inputSelector);
            const submitButton = form.querySelector(this._submitButtonSelector);
            this._toggleButtonState(submitButton, inputList);
            this._setEventListeners(form, inputList, submitButton)
        })
    }
}


