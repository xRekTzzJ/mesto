

const showInputError = (errorTextElement, validationMessage, activeErrorClass, activeErrorInputClass, input) => {
    errorTextElement.textContent = validationMessage;
    errorTextElement.classList.add(activeErrorClass);
    input.classList.add(activeErrorInputClass);
}

const hideInputError = (errorTextElement, activeErrorClass, activeErrorInputClass, input) => {
    errorTextElement.classList.remove(activeErrorClass);
    input.classList.remove(activeErrorInputClass);
}

const disableButton = (submitButton, inactiveSubmitButtonClass) => {
    submitButton.classList.add(inactiveSubmitButtonClass);
    submitButton.disabled = true;
};

const enableButton = (submitButton, inactiveSubmitButtonClass) => {
    submitButton.classList.remove(inactiveSubmitButtonClass);
    submitButton.disabled = false;
};

const checkInputValidity = (input, errorClassTemplate, activeErrorClass, activeErrorInputClass) => {
    const errorTextElement = document.querySelector(`${errorClassTemplate}${input.name}`);
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

const toggleButtonState = (submitButton, inactiveSubmitButtonClass, inputList) => {
if(!hasInvalidInput(inputList)){
    enableButton(submitButton, inactiveSubmitButtonClass);
}
else{
    disableButton(submitButton, inactiveSubmitButtonClass);
}
}

const setEventListeners = (form, inputList, errorClassTemplate, activeErrorClass, inactiveSubmitButtonClass, activeErrorInputClass,submitButton) => {
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });

    inputList.forEach((input) => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(input, errorClassTemplate, activeErrorClass, activeErrorInputClass);
            toggleButtonState(submitButton, inactiveSubmitButtonClass, inputList);
        });
     });

     //* Открытие едит попапа
  editButton.addEventListener('click', function openEditPopup(){
    open(editPopup)
    nameInput.value = userName.textContent;
    occupationInput.value = userOccupation.textContent;
    enableButton(submitButton, inactiveSubmitButtonClass);
  });
  

  //*Открытия попапа добавления карточек
  addButton.addEventListener('click', function openAddPopup(){
    open(addPopup)
    cardNameInput.value='';
    cardImageInput.value='';
    disableButton(submitButton, inactiveSubmitButtonClass);
  });
}

const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((form) => {
        const inputList = form.querySelectorAll(config.inputSelector);
        const submitButton = form.querySelector(config.submitButtonSelector);
        const inactiveSubmitButtonClass = config.inactiveSubmitButtonClass;
        toggleButtonState(submitButton, inactiveSubmitButtonClass, inputList);
        setEventListeners(form, inputList, config.errorClassTemplate, config.activeErrorClass, config.inactiveSubmitButtonClass, config.activeErrorInputClass ,submitButton)
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////