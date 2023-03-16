const showInputError = (errorTextElement, validationMessage, activeErrorClass, activeErrorInputClass, input) => {
    errorTextElement.textContent = validationMessage;
    errorTextElement.classList.add(activeErrorClass);
    input.classList.add(activeErrorInputClass);
}
const hideInputError = (errorTextElement, activeErrorClass, activeErrorInputClass, input) => {
    errorTextElement.classList.remove(activeErrorClass);
    input.classList.remove(activeErrorInputClass);
}
//изменил принцип поиска и передачи класса отключенной кнопки. теперь класс берется напрямую из конфига
const disableButton = (submitButton, validationConfig) => {
    submitButton.classList.add(validationConfig.inactiveSubmitButtonClass);
    submitButton.disabled = true;
};
const enableButton = (submitButton, validationConfig) => {
    submitButton.classList.remove(validationConfig.inactiveSubmitButtonClass);
    submitButton.disabled = false;
};
const checkInputValidity = (input, errorTextElement, activeErrorClass, activeErrorInputClass) => {
 if(!input.validity.valid){
    showInputError(errorTextElement, input.validationMessage, activeErrorClass, activeErrorInputClass, input);
 }
 else{
    hideInputError(errorTextElement, activeErrorClass, activeErrorInputClass, input);
 }
}
const hasInvalidInput = (inputList) => {
    return Array.from(inputList).some((input) => !input.validity.valid);
}

const toggleButtonState = (submitButton, inputList) => {
if(!hasInvalidInput(inputList)){
    enableButton(submitButton, validationConfig);
}
else{
    disableButton(submitButton, validationConfig);
}
}
const setEventListeners = (form, inputList, errorClassTemplate, activeErrorClass, activeErrorInputClass,submitButton) => {
    inputList.forEach((input) => {
        const errorTextElement = document.querySelector(`${errorClassTemplate}${input.name}`);
        hideInputError(errorTextElement, activeErrorClass, activeErrorInputClass, input);
        input.addEventListener('input', (evt) => {
            checkInputValidity(input, errorTextElement, activeErrorClass, activeErrorInputClass);
            toggleButtonState(submitButton, inputList);
        });
     });
}
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((form) => {
        const inputList = form.querySelectorAll(config.inputSelector);
        const submitButton = form.querySelector(config.submitButtonSelector);
        toggleButtonState(submitButton, inputList);
        setEventListeners(form, inputList, config.errorClassTemplate, config.activeErrorClass, config.activeErrorInputClass ,submitButton)
    })
}
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorClassTemplate: '.popup__input-error_type_',
    activeErrorClass: 'popup__input-error_active',
    activeErrorInputClass: 'popup__input_error',
    submitButtonSelector: '.popup__submit-button',
    inactiveSubmitButtonClass: 'popup__submit-button_inactive',
}
enableValidation(validationConfig);