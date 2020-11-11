// выбираем элементы попапа
let popup = document.querySelector('.popup');

// выбираем кнопки
let popupCloseButton = popup.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile__edit-button');

// выбираем элементы формы
let form = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_description');

// выбираем имя и информацию о себе в поле для ввода
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

//добавляем имя и информацию о себе в поле для ввода
nameInput.value = profileName.textContent;
jobInput.value = profileDescription.textContent;

// функция открытия попапа
function showPopup() {
  popup.classList.add('popup_opened');
  popup.removeEventListener('click', showPopup);
}

// функция закрытия попапа
function closePopup() {
  popup.classList.remove('popup_opened');
}

// Обработчик клика на попап
function popupClickHandler(event) {
  if (event.target.classList.contains('popup')) {
    closePopup();
  }
}

// Обработчик «отправки» формы
function submitForm(event) {
  // запрет перезагрузки страницы
  event.preventDefault();
  //добавление новых значений
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  //закрытие попапа
  closePopup();
}

// слушатели событий
editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
popup.addEventListener('mousedown', popupClickHandler);
form.addEventListener('submit', submitForm);

