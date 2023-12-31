/*like*/
let buttonlike = document.querySelectorAll(".element__button-like");

buttonlike.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("element__button-like_liked");
  });
});

const profileEditButton = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const popupClosed = document.querySelector(".popup__button-close");

const formElement = document.querySelector(".form");
const nameInput = formElement.querySelector(".form__input_type_name");
const descriptionInput = formElement.querySelector(
  ".form__input_type_description"
);

const profileName = document.querySelector(".profile__name-title");
const profileDescription = document.querySelector(".profile__name-description");

function openPopup() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closePopup();
}

formElement.addEventListener("submit", handleFormSubmit);
profileEditButton.addEventListener("click", openPopup);
popupClosed.addEventListener("click", closePopup);
