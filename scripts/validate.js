

const showInputError = (errorTextElement, validationMessage, activeErrorClass) => {
    errorTextElement.textContent = validationMessage;
    errorTextElement.classList.add(activeErrorClass);
}

const hideInputError = (errorTextElement, activeErrorClass) => {
    errorTextElement.classList.remove(activeErrorClass);
}

const disableButton = (submitButton, inactiveSubmitButtonClass) => {
    submitButton.classList.add(inactiveSubmitButtonClass);
    submitButton.disabled = true;
};

const enableButton = (submitButton, inactiveSubmitButtonClass) => {
    submitButton.classList.remove(inactiveSubmitButtonClass);
    submitButton.disabled = false;
};

const checkInputValidity = (input, errorClassTemplate, activeErrorClass) => {
    const errorTextElement = document.querySelector(`${errorClassTemplate}${input.name}`);
 if(!input.validity.valid){
    showInputError(errorTextElement, input.validationMessage, activeErrorClass);
 }
 else{
    hideInputError(errorTextElement, activeErrorClass);
 }
}

const hasInvalidInput = (inputList) => {
    return Array.from(inputList).some((input) => !input.validity.valid);
}

const toggleButtonState = (submitButton, inactiveSubmitButtonClass, inputList) => {
if(!hasInvalidInput(inputList)){
    enableButton(submitButton, inactiveSubmitButtonClass);
}
else{
    disableButton(submitButton, inactiveSubmitButtonClass);
}
}

const setEventListeners = (form, inputList, errorClassTemplate, activeErrorClass, inactiveSubmitButtonClass, submitButton) => {
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });

    inputList.forEach((input) => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(input, errorClassTemplate, activeErrorClass);
            toggleButtonState(submitButton, inactiveSubmitButtonClass, inputList);
        });
     });
}

const enableValidation = (config) => {
    const form = document.querySelector(config.formSelector);
    const inputList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);
    setEventListeners(form, inputList, config.errorClassTemplate, config.activeErrorClass, config.inactiveSubmitButtonClass, submitButton)
}

enableValidation({
formSelector: '.popup__form',
inputSelector: '.popup__input',
errorClassTemplate: '.popup__input-error_type_',
activeErrorClass: 'popup__input-error_active',
submitButtonSelector: '.popup__submit-button',
inactiveSubmitButtonClass: 'popup__submit-button_inactive'
});