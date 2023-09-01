const buttonEdit = document.querySelector('.header__link');
const buttonClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__content');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');


function openPopup() {
    popup.classList.add('popup__visible');
}

function closePopup() {
    popup.classList.remove('popup__visible');
}


buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
