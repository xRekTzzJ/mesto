const showInputError = (errorTextElement, validationMessage, activeErrorClass, activeErrorInputClass, input) => {
    errorTextElement.textContent = validationMessage;
    errorTextElement.classList.add(activeErrorClass);
    input.classList.add(activeErrorInputClass);
}
const hideInputError = (errorTextElement, activeErrorClass, activeErrorInputClass, input) => {
    errorTextElement.classList.remove(activeErrorClass);
    input.classList.remove(activeErrorInputClass);
}
//Убрал добавление класса через конфиг, чтобы была возможность вызова функции блокировки кнопки в функции открытия попапа добавления карточек
const disableButton = (submitButton) => {
    submitButton.classList.add('popup__submit-button_inactive');
    submitButton.disabled = true;
};
//Убрал удаление класса через конфиг, чтобы была возможность вызова функции разблокировки кнопки в функции открытия попапа редактирования профиля
const enableButton = (submitButton) => {
    submitButton.classList.remove('popup__submit-button_inactive');
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

const toggleButtonState = (submitButton, /*inactiveSubmitButtonClass,*/ inputList) => {
if(!hasInvalidInput(inputList)){
    enableButton(submitButton);
}
else{
    disableButton(submitButton);
}
}
const setEventListeners = (form, inputList, errorClassTemplate, activeErrorClass, /*inactiveSubmitButtonClass,*/ activeErrorInputClass,submitButton) => {
    inputList.forEach((input) => {
        const errorTextElement = document.querySelector(`${errorClassTemplate}${input.name}`);
        hideInputError(errorTextElement, activeErrorClass, activeErrorInputClass, input);
        input.addEventListener('input', (evt) => {
            checkInputValidity(input, errorTextElement, activeErrorClass, activeErrorInputClass);
            toggleButtonState(submitButton, /*inactiveSubmitButtonClass,*/ inputList);
        });
     });
}
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((form) => {
        const inputList = form.querySelectorAll(config.inputSelector);
        const submitButton = form.querySelector(config.submitButtonSelector);
        //const inactiveSubmitButtonClass = config.inactiveSubmitButtonClass;
        toggleButtonState(submitButton, /*inactiveSubmitButtonClass,*/ inputList);
        setEventListeners(form, inputList, config.errorClassTemplate, config.activeErrorClass, /*config.inactiveSubmitButtonClass,*/ config.activeErrorInputClass ,submitButton)
    })
}
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorClassTemplate: '.popup__input-error_type_',
    activeErrorClass: 'popup__input-error_active',
    activeErrorInputClass: 'popup__input_error',
    submitButtonSelector: '.popup__submit-button',
    //inactiveSubmitButtonClass: 'popup__submit-button_inactive',
}
enableValidation(validationConfig);